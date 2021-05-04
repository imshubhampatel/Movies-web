import React from 'react'
import { addFavourite, removeFromFavourite } from '../actions/index'


class Movies extends React.Component {
    render() {
        // const { movies } = this.props.store.getState();
        const { num, isFavourite, movie } = this.props;
        const { Poster, Title, Plot, imdbRating } = movie;// normal props

        // commig dirrently from app.js 
        const addFavHandler = (movie) => {
            const { store } = this.props;
            store.dispatch(addFavourite(movie))
            // console.log(isFavourite);
            // console.log("favstore fav", store.getState());


        }
        const unFavHandler = (movie) => {
            const { store } = this.props;
            store.dispatch(removeFromFavourite(movie))
            // console.log(isFavourite);
            // console.log("favstore unfav", store.getState());

        }

        return (
            <>
                <div className="movie-card">
                    <div className="action-left">
                        <img src={Poster} alt="Movie" />
                    </div>
                    <div className="action-right">
                        <div className="item-top">
                            <h1>{num + 1}.  {Title}</h1>
                            <p>{Plot}</p>
                        </div>
                        <div className="item-bottom">
                            <h1>Rating :<span>{imdbRating}</span></h1>
                            <div className="two-button">
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
