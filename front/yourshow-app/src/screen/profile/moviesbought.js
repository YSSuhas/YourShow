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

function MovieBought({match,history}) {

	const paymentList = useSelector(state => state.paymentList)
    const {loadingp,errorp,payments} = paymentList

    const rentList = useSelector(state => state.rentList)
    const {loadingr,errorr,rents} = rentList

    const [username, setUsername] = useState('')
    const [mail, setMail] = useState('')

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
        	dispatch(listPayments(userInfo))
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
				Movies Bought:
			</Col>
			<Col>
				<LinkContainer to={`/profile`}>
          			<MDBBtn color="transparent" type="submit" className="white-text">Back to Profile</MDBBtn>
          		</LinkContainer>
			</Col>
			</Row>
			<div className='ProfileFlex'>
			{payments && payments.map(payment => {
			return(
				<div className='ProfileText'>	
				<LinkContainer to={`/movies/${payment.movie._id}`}>
					<img className="ProfileSize" src={payment.movie.poster}/>
				</LinkContainer>
		    	<LinkContainer to={`/movies/${payment.movie._id}`}>
					<p className="TextStyle MoviesTextSize white-text">{payment.movie.moviename}</p>
				</LinkContainer>	
				<p className="TextStyle MoviesTextSize white-text">Price : {payment.price}</p>
				<p className="TextStyle MoviesTextSize white-text">Method : {payment.paymentMethod}</p>
				<p className="TextStyle MoviesTextSize white-text">Paid At : {payment.paidAt}</p>
				</div>
				)
		})}
			</div>
        </Container>
		</div>
	);
}

export default MovieBought;