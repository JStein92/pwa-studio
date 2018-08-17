import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SearchCategoryList from './searchCategoryList';
import { createElement, Component } from 'react';

const categoryListQuery = gql`
query category($id: Int!) {
  category(id: $id) {
    children {
      name
    }
  }
}
`;

export default class SearchCategory extends Component {

  render() {
    return (
      <Query query={categoryListQuery} variables={{id: 2}}>
      {({ loading, error, data }) => {
        if (error) return <div>Data Fetch Error</div>;
        if (loading) return <div>Fetching Data</div>;

        return (
          <SearchCategoryList data={data}/>
        );
      }}
      </Query>
    )
  }
}
