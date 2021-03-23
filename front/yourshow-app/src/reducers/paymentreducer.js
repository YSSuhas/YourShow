import{
    PAYMENT_CREATE_FAIL,
    PAYMENT_CREATE_REQUEST,
    PAYMENT_CREATE_SUCCESS,
    PAYMENT_LIST_REQUEST,
    PAYMENT_LIST_SUCCESS,
    PAYMENT_LIST_FAIL
} from '../constants/paymentconstants'

//CREATE PAYMENT
export const paymentReducer = (state = {},action) => {
    switch(action.type){
        case PAYMENT_CREATE_REQUEST:
            return{
                loading:true,
            }
        case PAYMENT_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                paymentMethod: action.payload
            }   
        case PAYMENT_CREATE_FAIL:
            return{
                loading:false,
                error: action.payload,
            }
        default:
            return state
    }
}

//SET THE DETAILS ABOUT PAYMENTS
export const paymentListReducer = (state = {payments:[]}, action) => {
    switch(action.type){
        case PAYMENT_LIST_REQUEST:
            return {
                loadingp: true,
                success:false,
                payments: []
            } 
            
        case PAYMENT_LIST_SUCCESS:
            return{
                loadingp:false,
                success:true,
                payments: action.payload
            }
            //console.log(payments);
        case PAYMENT_LIST_FAIL:
            return{
                loadingp:false, 
                success:false,
                errorp: action.payload
            }
        default:
            return state
    }
}