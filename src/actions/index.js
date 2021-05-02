export const ACTIONS = {
    ADD_MOVIES: "ADD_MOVIES",
    ADD_FAVOURITE: "ADD_TO_FAVOURITE",
    REMOVE_FAVOURITE: "REMOVE_FROM _FAVOURITE",
    SET_SHOW_FAVOURITE: "SET_SHOW_FAVOURITE"
}

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