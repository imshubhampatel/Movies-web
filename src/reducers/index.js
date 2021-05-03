import { ACTIONS } from "../actions/index";

/* must know three things
first : ...state,
second: action.type which is type we send by action functions
third : action.something which you have passed by actions function
*/

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}
export default function movies(state = initialMoviesState, action) {
    switch (action.type) {
        case ACTIONS.ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ACTIONS.ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case ACTIONS.REMOVE_FAVOURITE:
            const filterArray = state.favourites.filter((movie) => {
                return movie.title !== action.movie.title
            })
            return {
                ...state,
                favourites: filterArray
            }
        case ACTIONS.SET_SHOW_FAVOURITE:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            return state;
    }

}
