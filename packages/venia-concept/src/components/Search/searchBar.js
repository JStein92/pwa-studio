import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import classify from 'src/classify';
import defaultClasses from './search.css';
import SearchResults from './searchResults';
import { debounce } from 'underscore';
import { Component, createElement } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import constants from './constants';

const searchQuery = gql`
query products($search: String) {
  products(search: $search) {
    items {
      id
      name
    }
  }
}
`;


class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

    render() {
      return (
        <div>
        <input onChange={this.props.inputChange} />

        { this.props.searchTerm &&
          <Query query={searchQuery} variables={{search: this.props.searchTerm}}>
          {({ loading, error, data }) => {
            if (error) return <div>Data Fetch Error</div>;
            if (loading) return <div>Fetching Data</div>;

            return (
              <SearchResults data={data}/>
            );
          }}
          </Query>
        }

        </div>
      );
    }

}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChange: (evt) => {
      const action = {type: constants.CHANGE_INPUT_TEXT, text: evt.target.value}
      dispatch(action);
    }
  }
}

export default compose(
  classify(defaultClasses),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ))(SearchBar)
