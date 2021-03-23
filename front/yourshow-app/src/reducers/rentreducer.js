import{
    RENT_CREATE_FAIL,
    RENT_CREATE_REQUEST,
    RENT_CREATE_SUCCESS,
    RENT_LIST_REQUEST,
    RENT_LIST_SUCCESS,
    RENT_LIST_FAIL
} from '../constants/rentconstants'

//CREATE RENT
export const rentReducer = (state = {},action) => {
    switch(action.type){
        case RENT_CREATE_REQUEST:
            return{
                loading:true,
            }
        case RENT_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                rentMethod: action.payload
            }   
        case RENT_CREATE_FAIL:
            return{
                loading:false,
                error: action.payload,
            }
        default:
            return state
    }
}

//SET THE DETAILS ABOUT RENTS
export const rentListReducer = (state = {rents:[]}, action) => {
    switch(action.type){
        case RENT_LIST_REQUEST:
            return {
                loadingr: true,
                success:false,
                rents: []
            } 
            
        case RENT_LIST_SUCCESS:
            return{
                loadingr:false,
                success:true,
                rents: action.payload
            }
        case RENT_LIST_FAIL:
            return{
                loadingr:false, 
                success:false,
                errorr: action.payload
            }
        default:
            return state
    }
}