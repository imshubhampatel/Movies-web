import React from 'react';
import userData from '../UserData';
import Movies from "./Movies"


class MovieCard extends React.Component {
  render() {
    console.log("getState", this.props.store.getState());
    const { list } = this.props.store.getState();
    console.log(list);
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
}
export default MovieCard;

