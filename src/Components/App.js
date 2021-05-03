import React from 'react';
import Navbar from './Navbar';
import { addMovies } from '../actions/index'
import MovieCard from "./MovieCard";
import userData from "../UserData";

class App extends React.Component {

  // useeffect is called like componentDidMount 
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('updated')
      this.forceUpdate();

    })
    store.dispatch(addMovies(userData))
  }
  // useeffect is called like componentDidMount 

  render() {
    const { store } = this.props;

    const isShowFavourites = (movie) => {
      const { favourites } = this.props.store.getState();
      // console.log("favourites", favourites);
      const index = favourites.indexOf(movie);

      if (index === -1) {
        return true;
      }
      return false;

    }
    // let b = isShowFavourites()
    // console.log("value of isShowFavourites",b);
    return (
      <div className="App" >
        <div className="fluid-container">
          <Navbar store={store} />
          <MovieCard store={store} isShowFavourites={isShowFavourites} />
        </div>
      </div>
    );
  }

}

export default App;
