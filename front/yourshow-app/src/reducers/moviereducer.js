import {
    MOVIE_REGISTER_FAIL,
    MOVIE_REGISTER_REQUEST,
    MOVIE_REGISTER_SUCCESS,
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS,
    MOVIE_LIST_FAIL,
    MOVIE_DETAILS_FAIL,
    MOVIE_DETAILS_REQUEST,
    MOVIE_DETAILS_SUCCESS
} from '../constants/movieconstants'

//MOVIE REGISTER REDUCER
export const movieRegisterReducer = (state={},action) => {
    switch(action.type){
        case MOVIE_REGISTER_REQUEST:
            return{
                loading:true,
                success:false
            }
        case MOVIE_REGISTER_SUCCESS:
            return{
                loading:false,
                success:true,
                movieInfo: action.payload
            }
        case MOVIE_REGISTER_FAIL:
            return{
                loading:false,
                success:false,
                error: action.payload
            }
        default: 
            return state
    }   
}

//SET THE DETAILS ABOUT ALL THE MOVIES
export const movieListReducer = (state = {movies:[]}, action) => {
    switch(action.type){
        case MOVIE_LIST_REQUEST:
            return {
                loading: true,
                success:false,
                movies: []
            } 
            
        case MOVIE_LIST_SUCCESS:
            return{
                loading:false,
                success:true,
                movies: action.payload
            }

        case MOVIE_LIST_FAIL:
            return{
                loading:false, 
                success:false,
                error: action.payload
            }
        default:
            return state
    }
}

//SET THE DETAILS ABOUT A PARTICULAR MOVIE 
export const movieDetailReducer = (state = {movie:[]}, action) => {
    switch(action.type){
        case MOVIE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                success:false
            } 
            
        case MOVIE_DETAILS_SUCCESS:
            return{
                loading:false,
                success:true,
                movie: action.payload
            }
        case MOVIE_DETAILS_FAIL:
            return{
                loading:false, 
                success:false,
                error: action.payload
            }
        default:
            return state
    }
}