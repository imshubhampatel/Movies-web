import React from 'react'
import { addFavourite, removeFromFavourite } from '../actions/index'


class Movies extends React.Component {
    render() {
        const { num, isFavourite, movie } = this.props;
        const { imgSrc, title, para, link, Rating } = movie;// normal props

        // commig dirrently from app.js 
        const addFavHandler = (movie) => {
            const { store } = this.props;
            store.dispatch(addFavourite(movie))
            console.log(isFavourite);
            console.log("favstore fav", store.getState());


        }
        const unFavHandler = (movie) => {
            const { store } = this.props;
            store.dispatch(removeFromFavourite(movie))
            console.log(isFavourite);
            console.log("favstore unfav", store.getState());

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
                                {

                                    isFavourite
                                        ? < button className="btn-unfav" onClick={() => unFavHandler(movie)}>Unfavourite</button>
                                        : < button className="btn-fav" onClick={() => addFavHandler(movie)}>Favourite</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Movies;
