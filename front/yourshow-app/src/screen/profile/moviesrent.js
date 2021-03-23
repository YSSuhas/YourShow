import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import NavBar from "../navbar/navbar"
import {Table,Button,Row,Col,Carousel,Container} from 'react-bootstrap'
import BackgroundImage from "../backimgg.jpg"
import {useSelector,useDispatch} from 'react-redux'
import { getUserDetails,logout } from '../../actions/useractions'
import { listPayments } from '../../actions/paymentactions'
import { listRents } from '../../actions/rentactions'
import {LinkContainer} from 'react-router-bootstrap'
import { MDBTable, MDBTableBody, MDBTableHead,MDBBtn,MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { updateUserProfile } from "../../actions/useractions.js";
import "../cssstyle.css"

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

function MovieRent({match,history}) {

    const rentList = useSelector(state => state.rentList)
    const {loadingr,errorr,rents} = rentList

    const dispatch = useDispatch()

	const userDetails = useSelector(state => state.userDetails)
    const {loading,error,user} = userDetails

    //const redirect =  location.search ? location.search.split('=')[1] : '/movie/:id/payment'

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
     useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
        //dispatch(getUserDetails(match.params.id))
        	dispatch(listRents(userInfo))
    },[history,userInfo,dispatch])

	return(
		<div style={divStyle} className="TextStyle white-text">
		<div>
			<NavBar />
		</div>
		<Container className="MoviesRent">
			<Row>
			<Col>
				Movies Rented:
			</Col>
			<Col>
				<LinkContainer to={`/profile`}>
          			<MDBBtn color="transparent" type="submit" className="white-text">Back to Profile</MDBBtn>
          		</LinkContainer>
			</Col>
			</Row>
			<div className='ProfileFlex'>
			{rents && rents.map(rent => {
			return(
				<div className='ProfileText'>
				<LinkContainer to={`/movies/${rent.movie._id}`}>
					<img className="ProfileSize" src={rent.movie.poster}/>
				</LinkContainer>	
		    	<LinkContainer to={`/movies/${rent.movie._id}`}>
					<p className="TextStyle MoviesTextSize white-text">{rent.movie.moviename}</p>
				</LinkContainer>	
				<p className="TextStyle MoviesTextSize white-text">Price : {rent.price}</p>
				<p className="TextStyle MoviesTextSize white-text">Rented For : {rent.rentTime} seconds</p>
				<p className="TextStyle MoviesTextSize white-text">Method : {rent.rentMethod}</p>
				<p className="TextStyle MoviesTextSize white-text">Paid At : {rent.paidAt}</p>
				</div>
				)
		})}
			</div>
        </Container>
		</div>
	);
}

export default MovieRent;