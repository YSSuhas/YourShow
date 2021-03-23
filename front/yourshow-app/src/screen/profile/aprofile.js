import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import NavBar from "../navbar/navbar"
import {Table,Button,Row,Col,Carousel,Container} from 'react-bootstrap'
import BackgroundImage from "../backimgg.jpg"
import {useSelector,useDispatch} from 'react-redux'
import { alogout } from '../../actions/adminactions'
import { listPayments } from '../../actions/paymentactions'
import {LinkContainer} from 'react-router-bootstrap'
import { MDBTable, MDBTableBody, MDBTableHead,MDBBtn } from 'mdbreact';
import { listUsers } from '../../actions/adminactions'
import "../cssstyle.css"

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

function AProfile({match,history}) {

	const userList = useSelector(state => state.userList)
    const {loading,error,users} = userList

    const dispatch = useDispatch()

    //const redirect =  location.search ? location.search.split('=')[1] : '/movie/:id/payment'

    const adminLogin = useSelector(state => state.adminLogin)
    const {adminInfo} = adminLogin
     useEffect(() => {
        if(!adminInfo){
            history.push('/admin/login')
        }
        dispatch(listUsers())
        //dispatch(getUserDetails(match.params.id))
        	//dispatch(listPayments(userInfo))
    },[history,adminInfo,dispatch])
     console.log(users);
      const submitHandler = (e) => {
        e.preventDefault()
        dispatch(alogout())
        history.push('/admin/login')
    }

	return(
		<div style={divStyle} className="TextStyle white-text">
		<div>
			<NavBar />
		</div>
		<Container>
			<div className="AdminDetailsY">
			<Row>
			<Col>
				<p>Welcome,  {adminInfo.adminname}</p>
			</Col>
			<Col>
				<p>Mail : {adminInfo.mail}</p>
			</Col>
			<Col>
			<form onSubmit={submitHandler}>
				<div className="text-center">
                    <MDBBtn color="transparent" type="submit" className="white-text">Logout</MDBBtn>
                  </div>
            </form>
			</Col>
			</Row>
			<Row>
				<div className="MovieFlex">
				Users:
				{users.map(user => {
				return(
					<div>
					<p className="TextStyle MoviesTextSize white-text">Username : {user.username}</p>
					<p className="TextStyle MoviesTextSize white-text AdminRowX AdminRow">Mail : {user.mail}</p>
					</div>
					)
				})}
				</div>
			</Row>
			</div>
		</Container>
		</div>
	);
}

export default AProfile;