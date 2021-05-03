import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import rootReducer from "./reducers/index"


// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log('action.type = ', action.type);
//       next(action);
//     }
//   }
// }

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('ACTION.TYPE==>', action.type);
  next(action);

}

const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store.getState());



ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
