import React from 'react'

export default function Movies(props) {
    const { imgSrc, movie, para, link, Rating, num } = props;
    return (
        <>
            <div className="movie-card">
                <div className="action-left">
                    <img src={imgSrc} alt="Movie" />
                </div>
                <div className="action-right">
                    <div className="item-top">
                        <h1>{num+1}.  {movie}</h1>
                        <p>{para}</p>
                    </div>
                    <div className="item-bottom">
                        <h1>Rating :<span>{Rating}</span></h1>
                        <div className="two-button">
                            <a href={link}><button className="btn-fav">Watch Now</button></a>
                            <button className="btn-fav">Favourite</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
