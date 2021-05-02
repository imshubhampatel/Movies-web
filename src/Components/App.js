import React from 'react';
import userData from "../UserData";
import { useEffect, useState } from 'react'

import { addMovies } from "../actions/index"
import Navbar from './Navbar';
import MovieCard from "./MovieCard";

export default function App(props) {
  let [, setState] = useState();

  const { list } = props.store.getState();

  // dispatching useEffect 
  useEffect(() => {
    const { store } = props;
    store.dispatch(addMovies(userData))
  }, [])

  // for updating dom 
  useEffect(() => {
    setState({});
  }, [])

  return (
    <div className="App">
      <div className="fluid-container">
        <Navbar />
        <MovieCard store={props.store} />
      </div>
    </div>
  );
}

