import{
    PAYMENT_CREATE_FAIL,
    PAYMENT_CREATE_REQUEST,
    PAYMENT_CREATE_SUCCESS,
    PAYMENT_LIST_REQUEST,
    PAYMENT_LIST_SUCCESS,
    PAYMENT_LIST_FAIL
} from '../constants/paymentconstants'

import axios from 'axios'

//CREATE A NEW PAYMENT
export const createPayment = (paymentMethod,userInfo,movie) => async (dispatch,getState) => {
    try{
        dispatch({
            type: PAYMENT_CREATE_REQUEST
        })
 
        const {userLogin : {userInfo}} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            },
        }
        const {data} = await axios.post(
            '/api/payments',
            {paymentMethod,userInfo,movie},
            config
        )

        dispatch({
            type: PAYMENT_CREATE_SUCCESS,
            payload: data
        })
        
    }catch(error) {
        dispatch({   
            type:PAYMENT_CREATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
} 

//GET DETAILS OF ALL PAYMENTS 
export const listPayments = (userInfo) => async(dispatch,getState) => {
    try{
        dispatch({
            type:PAYMENT_LIST_REQUEST
        })

        /*const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            },
        }*/

        const {data} = await axios.get(
            `/api/payments/mypayments?userId=${userInfo._id}`
        )
        console.log(data);
        dispatch({
            type:PAYMENT_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({   
            type:PAYMENT_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}