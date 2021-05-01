import React from 'react';
import Movies from "./Movies"


export default function MovieCard(props) {
  const movie = props.movie;

  return (
    <div className="card-container">
      {movie.map((movie, index) => {
        return (
          <Movies
            key={index}
            num={index}
            imgSrc={movie.imgSrc}
            Rating={movie.Rating}
            link={movie.link}
            para={movie.para}
            movie={movie.movie}
          />
        )
      })}
    </div>
  );
}
