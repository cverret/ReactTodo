var redux = require('redux');
var {searchTextReducer, showComletedReducer, todosReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showComletedReducer,
    todos: todosReducer
  });
  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtensions ? window.devToolsExtension() : f => f
  ));

  return store;
};
