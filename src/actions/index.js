export const ACTIONS = {
    ADD_MOVIES: "ADD_MOVIES",
    ADD_FAVOURITE: "ADD_TO_FAVOURITE",
    REMOVE_FAVOURITE: "REMOVE_FROM _FAVOURITE",
    SET_SHOW_FAVOURITE: "SET_SHOW_FAVOURITE",
    ADD_MOVIE_TO_LIST: 'ADD_MOVIE_TO_LIST',
    ADD_SEARCH_RESULT: "ADD_SEARCH_RESULT"
}

// all functions passing in dispatch 

export function addMovies(movies) {
    return {
        type: ACTIONS.ADD_MOVIES,
        movies
    }

}

export function addFavourite(movie) {
    return {
        type: ACTIONS.ADD_FAVOURITE,
        movie
    }
}
export function removeFromFavourite(movie) {
    return {
        type: ACTIONS.REMOVE_FAVOURITE,
        movie
    }
}
export function setShowFavourite(val) {
    return {
        type: ACTIONS.SET_SHOW_FAVOURITE,
        val
    }
}

export function addMovieToList(movie) {
    // console.log("addmovietolist", movie);
    return {
        type: ACTIONS.ADD_MOVIE_TO_LIST,
        movie
    }
}


// api called here 
export function handleMovieSearch(text) {
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${text}`;

    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                // console.log(movie)
                dispatch(addMovieSearchResult(movie))
            });
    }

}

export function addMovieSearchResult(movie) {
    return {
        type: ACTIONS.ADD_SEARCH_RESULT,
        movie
    }
}


