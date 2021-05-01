import React from 'react';
import userData from "../UserData";

const Card = (props) => {
  const {imgSrc,movie,para,link,Rating} = props;
  console.log(Rating)

  return (
    <>
      <div className="movie-card">
        <div className="action-left">
          <img src={imgSrc} alt="Movie" />
        </div>
        <div className="action-right">
          <div className="item-top">
            <h1>{movie}</h1>
            <p>{para}</p>
          </div>
          <div className="item-bottom">
            <h1>{Rating}</h1>
            <div className="two-button">
              <a href={link} target="_blank"><button className="btn-fav">Watch Now</button></a>
              <button className="btn-fav">Favourite</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default function MovieCard() {
  return (
    <>
      <div className="card-container">
        {userData.map((movie, index) => {
          return (
            <Card
              key={index}
              imgSrc={movie.imgSrc}
              Rating={movie.Rating}
              link={movie.link}
              para={movie.para}
              movie={movie.movie}

            />
          )})}
      </div>
    </>
  );
}
