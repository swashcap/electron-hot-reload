const { createStore, applyMiddleware, compose } = require('redux');
const createLogger = require('redux-logger');
const rootReducer = require('../reducers');

module.exports = function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(createLogger())
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

