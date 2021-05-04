import React, { useState } from 'react';
import { addMovieToList, handleMovieSearch } from "../actions/index"
import "../styles.css"

import { setShowFavourite } from "../actions/index"

export default function Navbar(props) {
  const { store } = props;
  const { search } = store.getState();
  const { showResult } = search;

  const movie = search.result; //this movie is comming form api
  const { Title, imdbRating, Poster, Plot } = movie;

  const [searchText, setSearchText] = useState("");


  const onChangeTab = (val) => {
    // console.log(val);
    const { store } = props;
    store.dispatch(setShowFavourite(val))
  }

  const handleChange = (event) => {
    setSearchText(event.target.value)
  }


  const handleSearch = () => {
    const text = searchText;
    const { store } = props;
    store.dispatch(handleMovieSearch(text))

  }

  const movieAddHandler = (movie) => {
    const { store } = props;
    store.dispatch(addMovieToList(movie))
  }


  return (
    <>
      <nav className="nav">
        <div className="logo"><span>S</span>hu<span>b</span>ha<span>m</span></div>
        <div className="input-search">
          <input type="text" placeholder="Search here" onChange={(event) => handleChange(event)} />
          <input type="submit" value="search" onClick={handleSearch} />
        </div>
        {
          showResult &&
          <div className="search-container">
            <div className="movie-card">
              <div className="action-left">
                <img src={Poster} alt="Movie" />
              </div>
              <div className="action-right">
                <div className="item-top">
                  <h1>{Title}</h1>
                  <p>{Plot}</p>
                </div>
                <div className="item-bottom">
                  <h1>Rating :<span>{imdbRating}</span></h1>
                  < button className="btn-addmovies" onClick={() => movieAddHandler(movie)}>Add to Movies</button>
                </div>
              </div>
            </div>
          </div>
        }

        <ul className="items">
          <li><button className="btn btn-movies" onClick={() => onChangeTab(false)}>Movies</button></li>
          <li><button className="btn btn-favourites" onClick={() => onChangeTab(true)}>Favourites</button></li>
        </ul>
      </nav>
    </>
  );
}
