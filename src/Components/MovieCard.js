import React from 'react';
import Movies from "./Movies"

export default function MovieCard(props) {
  console.log("Called from Movie card", props.store.getState());
  const { list, favourites, showFavourites } = props.store.getState();
  const { isShowFavourites } = props;

  console.log("render");

  const displayMovies = showFavourites ? favourites : list

  return (
    <div className="card-container">
      {displayMovies.map((movie, index) => {
        return (
          <Movies
            key={index}
            num={index}
            movie={movie}
            store={props.store}
            isFavourites={isShowFavourites(movie)}
          />
        )
      })}
      {displayMovies.length === 0 ? <h1>there is no favourites</h1> : null}
    </div>

  );
}

