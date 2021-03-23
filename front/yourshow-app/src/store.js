import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userUpdateReducer
} from './reducers/userreducer'

import {
    adminLoginReducer,
    adminDetailsReducer,
    adminUpdateProfileReducer,
    userListReducer
} from './reducers/adminreducer'

import {
    movieRegisterReducer,
    movieListReducer,
    movieDetailReducer
} from './reducers/moviereducer'

import {
    paymentReducer,
    paymentListReducer
} from './reducers/paymentreducer'

import {
    rentReducer,
    rentListReducer
} from './reducers/rentreducer'

const reducer = combineReducers({
	userLogin           : userLoginReducer,
    userRegister        : userRegisterReducer,
    userDetails         : userDetailsReducer,
    userUpdateProfile   : userUpdateProfileReducer,
    adminLogin          : adminLoginReducer,
    adminDetails        : adminDetailsReducer,
    adminUpdateProfile  : adminUpdateProfileReducer,
    userList            : userListReducer,
    movieRegister       : movieRegisterReducer,
    movieList           : movieListReducer,
    movieDetails        : movieDetailReducer,
    payment             : paymentReducer,
    paymentList         : paymentListReducer,
    rent                : rentReducer,
    rentList            : rentListReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')) : null
const adminInfoFromStorage = localStorage.getItem('adminInfo') ? 
    JSON.parse(localStorage.getItem('adminInfo')) : null

const initialState = {
	 userLogin : {userInfo:userInfoFromStorage},
     adminLogin : {adminInfo:adminInfoFromStorage},
}

const middlewear = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewear))
)

export default store