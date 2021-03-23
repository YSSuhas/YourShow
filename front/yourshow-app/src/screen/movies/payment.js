import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import NavBar from "../navbar/navbar"
import BackgroundImage from "../backimgg.jpg"
import {useSelector,useDispatch} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {Table,Button,Row,Col,Carousel} from 'react-bootstrap'
import { listMovieDetails } from '../../actions/movieactions'
import "../cssstyle.css"
import { createPayment } from "../../actions/paymentactions.js";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

function Payment({match,history}) {
    const movieDetails = useSelector(state => state.movieDetails)
    const {loading,error,movie} = movieDetails

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const [paymentMethod,setPaymentMethod] = useState(null)

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false
    });

     useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
        dispatch(listMovieDetails(match.params.id))
    },[match,history,userInfo,dispatch])

     const submitHandler = (e) => {
        console.log("BUTTON CLICKED",paymentMethod);
        e.preventDefault()
        dispatch(createPayment(paymentMethod,userInfo,movie))
        history.push('/home')
    }

    const handleChange = (event,data) => {
    setState({ 
        checkedA:false,
        checkedB: false, 
        checkedC: false,
        checkedD: false,
        [event.target.name]: event.target.checked })
    setPaymentMethod(data)
  };

    return(
        <div style={divStyle}>
        <div>
            <NavBar />
        </div>
          <div className="MovieDetailsY white-text TextStyle">
            <Row className="MovieDetailsX">
            <Col md={1}>
              <img className='PosterSize' src={movie.poster}/>
            </Col>
            
              <Col md={8}>
                <form className="text-center" onSubmit={submitHandler}>
                  <p className="h5 text-center mb-4 white-text TextStyle">Payment</p>
                  <p>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={state.checkedA}
                                    onChange={ (e) => handleChange(e,'Credit Card') }
                                    name="checkedA"
                                    color="primary"
                                />
                                }
                                label="Credit Card"
                            />
                        </p>
                        <p>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={state.checkedB}
                                    onChange={ (e) => handleChange(e,'Debit Card') }
                                    name="checkedB"
                                    color="primary"
                                />
                                }
                                label="Debit Card"
                            />
                        </p>
                        <p>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={state.checkedC}
                                    onChange={ (e) => handleChange(e,"Net Banking") }
                                    name="checkedC"
                                    color="primary"
                                />
                                }
                                label="Net Banking"
                            />
                        </p>
                        <p>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={state.checkedD}
                                    onChange={ (e) => handleChange(e,"UPI") }
                                    name="checkedD"
                                    color="primary"
                                />
                                }
                                label="UPI"
                            />
                        </p>
                        <p>
                          Price : 500
                        </p>
                  <div className="text-center">
                    <MDBBtn color="transparent" type="submit" className="white-text">Pay</MDBBtn>
                  </div>
                </form>
              </Col>
            </Row>
            <Row className="MovieDetailsX2">
              <p className="TextStyle MoviesTextSize white-text">Name : {movie.moviename}</p>
            </Row>
            </div>
        </div>
    );
}

export default Payment;