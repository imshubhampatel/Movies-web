import React from 'react'
import { addFavourite } from '../actions/index'


export default function Movies(props) {
    const { movie } = props;
    const { imgSrc, title, para, link, Rating } =movie;// normal props
    const { num } = props;

    // commig dirrently from app.js 
    function addFavHandler(movie) {
        const { store } = props;
        console.log("before fav", store.getState());
        console.log(movie)
        store.dispatch(addFavourite(movie))
        console.log("after fav", store.getState());

    }

    return (
        <>
            <div className="movie-card">
                <div className="action-left">
                    <img src={imgSrc} alt="Movie" />
                </div>
                <div className="action-right">
                    <div className="item-top">
                        <h1>{num + 1}.  {title}</h1>
                        <p>{para}</p>
                    </div>
                    <div className="item-bottom">
                        <h1>Rating :<span>{Rating}</span></h1>
                        <div className="two-button">
                            <a href={link}><button className="btn-fav">Watch Now</button></a>
                            <button className="btn-fav" onClick={() => addFavHandler(movie)}>Favourite</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
