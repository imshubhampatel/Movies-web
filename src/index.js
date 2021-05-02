import React from 'react';
import ReactDOM from 'react-dom';
import movies from "./reducers/index"
import { createStore } from 'redux';
import App from './components/App';

const store = createStore(movies)
console.log("main file store",store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
