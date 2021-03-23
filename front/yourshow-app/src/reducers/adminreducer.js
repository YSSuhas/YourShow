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
    ADMIN_UPDATE_PROFILE_SUCCESS
} from '../constants/adminconstants'

//ADMIN LOGIN REDUCER
export const adminLoginReducer = (state = {}, action) => {
    switch(action.type){
        case ADMIN_LOGIN_REQUEST:
            return {
                loading: true,
            } 
            
        case ADMIN_LOGIN_SUCCESS:
            return{
                loading:false,
                adminInfo: action.payload,
            }

        case ADMIN_LOGIN_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        case ADMIN_LOGOUT:
            return {}
        default:
            return state
    }
}

//USE DETAILS REDUCER
//SET DETAILS OF CURRENTLY LOGGED IN USE
export const adminDetailsReducer = (state = {admin: {}}, action) => {
    switch(action.type){
        case ADMIN_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            } 
            
        case ADMIN_DETAILS_SUCCESS:
            return{
                loading:false,
                use: action.payload  
            }

        case ADMIN_DETAILS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        case ADMIN_LOGOUT:
            return {}
        case ADMIN_DETAILS_RESET:
            return{
                use: {}
            }
        default:
            return state
    }
}


//UPDATE THE ADMIN PROFILE
//ACCESSED BY ADMIN
export const adminUpdateProfileReducer = (state = {}, action) => {
    switch(action.type){
        case ADMIN_UPDATE_PROFILE_REQUEST:
            return {
                loading: true,
            } 
            
        case ADMIN_UPDATE_PROFILE_SUCCESS:
            return{
                loading:false,
                success:true,
                adminInfo: action.payload,
            } 

        case ADMIN_UPDATE_PROFILE_FAIL:
            return{
                loading: false, 
                error: action.payload,
            }
        case ADMIN_LOGOUT:
            return {}
        default:
            return state
    }
}

//SET DETAILS ABOUT LIST OF ALL THE USERS.ACCESSED BY ADMIN
export const userListReducer = (state = {users: []}, action) => {
    switch(action.type){
        case USER_LIST_REQUEST:
            return {
                loading: true,
                success:false,
                users: []
            } 
            
        case USER_LIST_SUCCESS:
            return{
                loading:false,
                success:true,
                users: action.payload,
            } 
            
        case USER_LIST_FAIL:
            return{
                loading: false, 
                error: action.payload,
            }
        default:
            return state
    }
}
