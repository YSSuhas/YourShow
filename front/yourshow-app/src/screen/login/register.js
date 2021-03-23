import React , { useState, useEffect, useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import "../cssstyle.css"
import LoginForm from "../../components/loginform.js";
import BackgroundImage from "../backimgg.jpg"
import {useSelector,useDispatch} from 'react-redux'
import { register } from "../../actions/useractions.js";

const divStyle = {
  width: '100%',
  height: '784px',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

const RegisterFormPage = ({location,history}) => {

const [mail, setMail] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword,setconfirmPassword] = useState('')
const [message,setMessagge] = useState(null)

const redirect = '/home'

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)

    const {loading,error,userInfo} = userRegister

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect ])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("called");
        if(password !== confirmPassword){
            setMessagge("Passwords do not match")
        }else{
        dispatch(register(username,mail,password))
      }
    }

return (
  <div style={divStyle}>
  <LoginForm />
<MDBContainer className="TextStyle CenterTab">
  <MDBRow>
    <MDBCol md="15">
      <form onSubmit={submitHandler}>
        <p className="h5 text-center mb-4 white-text">Register New User</p>
        <div className="white-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" className="white-text" value={username} onChange  = { (e) => setUsername(e.target.value) } />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" className="white-text" value={mail} onChange  = { (e) => setMail(e.target.value) } />
          <MDBInput label="Your password" icon="lock" group type="password" validate className="white-text" value={password} onChange  = { (e) => setPassword(e.target.value) } />
          <MDBInput label="Confirm your password" icon="exclamation-triangle" group type="password" validate error="wrong" success="right"className="white-text" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
        </div>
        <div className="text-center">
          <MDBBtn color="transparent" type="submit" className="white-text">Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
);
};

export default RegisterFormPage;