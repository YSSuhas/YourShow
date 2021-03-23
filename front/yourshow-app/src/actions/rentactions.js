import{
    RENT_CREATE_FAIL,
    RENT_CREATE_REQUEST,
    RENT_CREATE_SUCCESS,
    RENT_LIST_REQUEST,
    RENT_LIST_SUCCESS,
    RENT_LIST_FAIL
} from '../constants/rentconstants'

import axios from 'axios'

//CREATE A NEW RENT
export const createRent = (rentMethod,userInfo,movie,price,rentTime) => async (dispatch,getState) => {
    try{
        dispatch({
            type: RENT_CREATE_REQUEST
        })
        console.log("METHOD " + rentMethod + " TIME " + rentTime + " price " + price);
 
        const {userLogin : {userInfo}} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            },
        }
        const {data} = await axios.post(
            '/api/rents',
            {rentMethod,userInfo,movie,price,rentTime},
            config
        )

        dispatch({
            type: RENT_CREATE_SUCCESS,
            payload: data
        })
        
    }catch(error) {
        dispatch({   
            type:RENT_CREATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}

//GET DETAILS OF ALL PAYMENTS 
export const listRents = (userInfo) => async(dispatch,getState) => {
    try{
        dispatch({
            type:RENT_LIST_REQUEST
        })

        /*const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            },
        }*/
        const {data} = await axios.get(
            `/api/rents/myrents?userId=${userInfo._id}`
        )
        console.log("Rented" + data);
        dispatch({
            type:RENT_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({   
            type:RENT_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}