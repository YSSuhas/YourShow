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

function Profile({match,history}) {

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

      const submitHandler = (e) => {
        e.preventDefault()
        dispatch(logout())
        history.push('/')
    }

    const submitHandlers = (e) => {
        e.preventDefault()
        console.log("called");
        dispatch(updateUserProfile(userInfo,username,mail))
    }

	return(
		<div style={divStyle} className="TextStyle white-text">
		<div>
			<NavBar />
		</div>
		<Container>
			<div className="UserDetailsY">
			<Row className="UserDetailsX">
			<form onSubmit={submitHandlers}>
			<Col>
				<MDBInput label={userInfo.username} icon="user" group type="text" validate error="wrong"
            success="right" className="white-text" value={username} onChange  = { (e) => setUsername(e.target.value) } />
				<MDBInput label={userInfo.mail} icon="envelope" group type="email" validate error="wrong"
            success="right" className="white-text" value={mail} onChange  = { (e) => setMail(e.target.value) } />
				<div className="text-center">
          			<MDBBtn color="transparent" type="submit" className="white-text">Update</MDBBtn>
        		</div>
			</Col>
			</form>
			<Col>
			<form onSubmit={submitHandler}>
				<div className="text-center">
                    <MDBBtn color="transparent" type="submit" className="white-text">Logout</MDBBtn>
                  </div>
            </form>
			</Col>
			</Row>
			<div className="UserDetailsY1">
			<Row className="UserDetailsX1">
			Movies Bought:
			<LinkContainer to={`/profile/bought_movies`}>
          			<MDBBtn color="transparent" type="submit" className="white-text">Bought Movies</MDBBtn>
          		</LinkContainer>
			</Row>
			<Row className="UserDetailsX1">
			Movies Rented:
			<LinkContainer to={`/profile/rented_movies`}>
          			<MDBBtn color="transparent" type="submit" className="white-text">Rented Movies</MDBBtn>
          		</LinkContainer>
			</Row>
			</div>
			</div>
		</Container>
		</div>
	);
}

export default Profile;