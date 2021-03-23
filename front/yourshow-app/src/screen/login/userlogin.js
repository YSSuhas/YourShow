import React , { useState, useEffect, useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import "../cssstyle.css"
import LoginForm from "../../components/loginform.js";
import BackgroundImage from "../backimgg.jpg"
import {useSelector,useDispatch} from 'react-redux'
import { login } from "../../actions/useractions.js";

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

const UserFormPage = ({location,history}) => {

const [mail, setMail] = useState('')
const [password, setPassword] = useState('')

const redirect =  location.search ? location.search.split('=')[1] : '/home'

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)

    const {loading,error,userInfo} = userLogin

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect ])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(mail,password))
    }
    console.log(userInfo);
return (
  <div style={divStyle}>
  <LoginForm />
<MDBContainer className="TextStyle CenterTab">
  <MDBRow>
    <MDBCol md="15">
      <form onSubmit={submitHandler}>
        <p className="h5 text-center mb-4 white-text">User Login</p>
        <div className="white-text">
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" className="white-text" value={mail} onChange  = { (e) => setMail(e.target.value) } />
          <MDBInput label="Your password" icon="lock" group type="password" validate className="white-text" value={password} onChange  = { (e) => setPassword(e.target.value) } />
        </div>
        <div className="text-center">
          <MDBBtn color="transparent" type="submit" className="white-text">Log In</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
);
};

export default UserFormPage;