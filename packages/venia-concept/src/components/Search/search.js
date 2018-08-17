import { Fragment, Component, createElement } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import SearchBar from './searchBar';
import SearchCategory from './searchCategory';

export default class Search extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Fragment>
            <SearchCategory />
            <SearchBar />
          </Fragment>
        </Provider>
      </div>
    )
  }
}
