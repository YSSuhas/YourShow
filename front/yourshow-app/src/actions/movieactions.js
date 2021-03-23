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

import axios from 'axios'

export const movieregister = (moviename,poster,releaseYear,duration,language,director) => async (dispatch) => {
    try {
        dispatch({
            type:MOVIE_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post(
            '/api/movies/register',
            {moviename,poster,releaseYear,duration,language,director},
            config
        )

        dispatch({
            type: MOVIE_REGISTER_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: MOVIE_REGISTER_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}

//GET DETAILS OF ALL THE MOVIES 
export const listMovies = () => async(dispatch) => {
    try{
        dispatch({
            type:MOVIE_LIST_REQUEST
        })

        const {data} = await axios.get('/api/movies')
        dispatch({
            type:MOVIE_LIST_SUCCESS,
            payload: data
        })
        //console.log(data);
    }catch(error){
        dispatch({   
            type:MOVIE_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}

//GET DETAILS OF A PARTICULAR MOVIE
export const listMovieDetails = (id) => async(dispatch) => {
    try{
        dispatch({
            type:MOVIE_DETAILS_REQUEST
        })

        const {data} = await axios.get(`/api/movies/${id}`)
        console.log(data);
        dispatch({
            type:MOVIE_DETAILS_SUCCESS,
            payload:data
        })
        
    }catch(error){
        dispatch({   
            type:MOVIE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}