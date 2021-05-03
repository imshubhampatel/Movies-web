import React from 'react';
import Movies from "./Movies"


export default function MovieCard(props) {
  const { movies } = props.store.getState();

  const { list, showFavourite, favourite } = movies;

  console.log(list, favourite, showFavourite);




  const displayMovies = showFavourite ? favourite : list

  return (
    <div className="card-container">
      {displayMovies.map((movie, index) => {
        return (
          <Movies
            key={index}
            num={index}
            movie={movie}
            store={props.store}
            isFavourite={props.isMovieFavourite(movie)}
          />
        )
      })}
      {displayMovies.length === 0 ? <h1>No favourites is here</h1> : null}
    </div>
  );
}
