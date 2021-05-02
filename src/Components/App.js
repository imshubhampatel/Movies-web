import React from 'react';
import userData from "../UserData";

import { addMovies } from "../actions/index"
import Navbar from './Navbar';
import MovieCard from "./MovieCard";


class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated subscribe store")
      this.forceUpdate();

    })
    store.dispatch(addMovies(userData))
  }
  render() {
   


    const isMovieFavourite = (movie) => {
      const { favourite } = this.props.store.getState();
      const index = favourite.indexOf(movie);
      if (index !== -1) {
        // movie found
        return true;
      }
      return false;
    }
    return (
      <div className="App">
        <div className="fluid-container">
          <Navbar store={this.props.store} />
          <MovieCard store={this.props.store} isMovieFavourite={isMovieFavourite} />
        </div>
      </div>
    );
  }
}

export default App;
