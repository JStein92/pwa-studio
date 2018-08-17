import { createElement, Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import constants from './constants';

export default class SearchCategoryList extends Component {
  constructor(props){
    super(props)
  }

  render() {
    if (this.props.data.category.children.length == 0) return <div> No results </div>
    return (
      <select onChange={this.props.categorySelect}>
        <option value='all'>All Categories</option>
        {
          this.props.data.category.children.map((item) => {
            return  (
              <option value={item.name} key={item.name} >{ item.name }</option>
            )
          })
        }
      </select>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    categorySelect: (evt) => {
      const action = {type: constants.CHANGE_CATEGORY, text: evt.target.value}
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
