import {
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGOUT,
    ADMIN_DETAILS_FAIL,
    ADMIN_DETAILS_REQUEST,
    ADMIN_DETAILS_SUCCESS,
    ADMIN_DETAILS_RESET,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    ADMIN_UPDATE_PROFILE_FAIL,
    ADMIN_UPDATE_PROFILE_REQUEST,
    ADMIN_UPDATE_PROFILE_SUCCESS,
    ADMIN_LIST_RESET
} from '../constants/adminconstants'

import axios from 'axios'

//LOGIN ACTION 
export const alogin = (mail,password) => async (dispatch) => {
    try{
        dispatch({
            type: ADMIN_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post(
            `/api/admins/admin/login`,
            {mail,password},
            config
        )

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('adminInfo',JSON.stringify(data));
        
    }catch(error) {
        dispatch({   
            type:ADMIN_LOGIN_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}

//LOGOUT
export const alogout = () => (dispatch) => {
    localStorage.removeItem('adminInfo')
    dispatch({
        type: ADMIN_LOGOUT 
    })  
    dispatch({
        type: ADMIN_DETAILS_RESET
    })  
    /*dispatch({
        type: MOVIE_LIST_MY_RESET
    })*/   
    dispatch({
        type: ADMIN_LIST_RESET
    })
    
}

//GET THE LIST OF ALL THE USERS.ACCESSED BY ADMIN
export const listUsers = () => async (dispatch,getState) => {
    try{
        dispatch({
            type: USER_LIST_REQUEST
        })

        const {data} = await axios.get(
            `/api/admins/admin/getusers`
        )
        
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({   
            type:USER_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}