import React from 'react';
import Movies from "./Movies"
import userData from "../UserData";


export default function MovieCard() {
  return (
    <div className="card-container">
      {userData.map((movie, index) => {
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
