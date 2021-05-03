import { ACTIONS } from '../actions/index';
import { combineReducers } from "redux";

const initialMoviesState = {
    list: [],
    favourite: [],
    showFavourite: false
}

export function movies(state = initialMoviesState, action) {
    switch (action.type) {
        case ACTIONS.ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ACTIONS.ADD_FAVOURITE:
            return {
                ...state,
                favourite: [action.movie, ...state.favourite] ///we can change order of movies here
            }
        case ACTIONS.REMOVE_FAVOURITE:
            const filterArray = state.favourite.filter(
                (movie) => movie.title !== action.movie.title
            )
            return {
                ...state,
                favourite: filterArray
            }
        case ACTIONS.SET_SHOW_FAVOURITE:
            return {
                ...state,
                showFavourite: action.val
            }
        default:
            return state;
    }
}


const initialSearchState = {
    result: {}
}
export function search(state = initialSearchState, action) {
    return state;

}
const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}

// export default function rootReducer(state = initialRootState, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }

// }

export default combineReducers({
    movies,
    search

})