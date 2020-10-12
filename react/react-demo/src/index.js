import React from 'react';
import ReactDOM from 'react-dom';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import todoApp from './reducers'
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

// let store = createStore(
//   todoApp,
//   applyMiddleware(thunk)
// );

ReactDOM.render(
  /* <Provider store={store}>
  </Provider>, */
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
