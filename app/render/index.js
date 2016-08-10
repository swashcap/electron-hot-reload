const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { hashHistory, Router } = require('react-router');
const { syncHistoryWithStore } = require('react-router-redux');

const configureStore = require('./store/configure-store');
const routes = require('./routes');

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  ),
  document.getElementById('app')
);
