import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./reducers/index"
import App from './components/App';


// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log('action.type = ', action.type);
//       next(action);
//     }
//   }
// }

const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== "function") {
    // console.log('ACTION.TYPE==>', action.type);
  }
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
