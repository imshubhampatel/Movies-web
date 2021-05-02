import { ACTIONS } from '../actions/index'

const initialMoviesState = {
    list: [],
    favourite: []
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
                favourite: [action.movies, ...state.favourite]
            }
        default:
            return state;
    }
}