const { routerReducer } = require('react-router-redux');
const { combineReducers } = require('redux');

// Simple test reducer
function itemsReducer(
  items = ['Learn Redux', 'Master Webpack', 'Hot reloading'],
  action
) {
  return items;
}

module.exports = combineReducers({
  items: itemsReducer,
  routing: routerReducer,
});

