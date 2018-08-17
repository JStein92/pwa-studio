import { createStore } from 'redux';
import constants from './constants';

const initialState = {
  searchTerm: '',
  category: ''
}

const reducer = (state = initialState, action) => {
  console.log('reducer', action.text)
  switch(action.type) {
    case constants.CHANGE_INPUT_TEXT:
      return Object.assign({}, state, {searchTerm: action.text})
    case constants.CHANGE_CATEGORY:
      return Object.assign({}, state, {category: action.text})
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;
