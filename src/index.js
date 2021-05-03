import React from 'react';
import ReactDOM from 'react-dom';
import movies from "./reducers/index"
import { createStore } from 'redux';
import App from './components/App';

const store = createStore(movies)

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
