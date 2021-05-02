const initialMoviesState = {
    list: [],
    favourites: []
}
export default function movies(state = initialMoviesState, action) {
    switch (action.type) {
        case "ADD_MOVIES":
            return {
                ...state,
                list: action.movies
            }
    }

}
