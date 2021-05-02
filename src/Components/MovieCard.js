import React from 'react';
import Movies from "./Movies"


export default function MovieCard(props) {
  const { list } = props.store.getState();
  return (
    <div className="card-container">
      {list.map((movie, index) => {
        return (
          <Movies
            key={index}
            num={index}
            movie={movie}
            store={props.store}
          />
        )
      })}
    </div>
  );
}
