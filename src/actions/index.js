export const ACTIONS = {
    ADD_MOVIES: "ADD_MOVIES",
    ADD_FAVOURITE: "ADD_FAVOURITE"
}

export function addMovies(movies) {
    return {
        type: ACTIONS.ADD_MOVIES,
        movies: movies
    }

}

export function addFavourite(movie) {
    return {
        type: ACTIONS.ADD_FAVOURITE,
        movie: movie
    }
}