import React from 'react';
import { addToFavourites,removeFromFavourite } from "../actions/index"

export default function Movies(props) {
    const { imgSrc, title, para, link, Rating } = props.movie;
    const { num } = props;

    // console.log(props);
    const { isFavourites } = props;
    // console.log(isFavourites);



    const favClickHandler = (movie) => {
        const { store } = props;
        console.log("movies sote", store);
        //wrong  we can not write like that const {store}  = props >store{dispatch,subscribe}
        //right  we can not write like that const {store}  = props.store : ={dispatch,subscribe}
        store.dispatch(addToFavourites(movie))
        console.log("state", store.getState());
    }
    const unFavClickHandler = (movie) => {
        const { store } = props;
        store.dispatch(removeFromFavourite(movie))

    }
    return (
        <>
            <div className="movie-card" data-aos={num % 2 === 0 ? "fade-up" : "fade-down"}>
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
                            {
                                isFavourites
                                    ? <button className="btn-fav" onClick={() => favClickHandler(props.movie)}>Favourite</button>
                                    : <button className="btn-unfav" onClick={() => unFavClickHandler(props.movie)}>unfavourite</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
