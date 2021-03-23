import React , { useState, useEffect, useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import "../cssstyle.css"
import LoginForm from "../../components/loginform.js";
import BackgroundImage from "../backimgg.jpg"
import {useSelector,useDispatch} from 'react-redux'
import { alogin } from "../../actions/adminactions.js";

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

const AdminFormPage = ({location,history}) => {

const [mail, setMail] = useState('')
const [password, setPassword] = useState('')

const redirect = location.search ? location.search.split('=')[1] : '/admin/home'

    const dispatch = useDispatch()

    const adminLogin = useSelector(state => state.adminLogin)

    const {loading,error,adminInfo} = adminLogin

    useEffect(() => {
        if(adminInfo){
            history.push(redirect)
        }
    },[history,adminInfo,redirect ])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(location.search.split('=')[1]);
        dispatch(alogin(mail,password))
    }

return (
  <div style={divStyle}>
  <LoginForm />
<MDBContainer className="TextStyle CenterTab">
  <MDBRow>
    <MDBCol md="15">
      <form onSubmit={submitHandler}>
        <p className="h5 text-center mb-4 white-text">Admin Login</p>
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

export default AdminFormPage;