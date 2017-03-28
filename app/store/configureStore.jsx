var redux = require('redux');
var {searchTextReducer, showComletedReducer, todosReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showComletedReducer,
    todos: todosReducer
  });
  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtensions ? window.devToolsExtension() : f => f
  ));

  return store;
};
