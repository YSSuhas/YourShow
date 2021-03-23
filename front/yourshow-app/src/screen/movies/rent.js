import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import NavBar from "../navbar/navbar"
import BackgroundImage from "../backimgg.jpg"
import {useSelector,useDispatch} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {Table,Button,Row,Col,Carousel} from 'react-bootstrap'
import { listMovieDetails } from '../../actions/movieactions'
import "../cssstyle.css"
import { createRent } from "../../actions/rentactions.js";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

function Rent({match,history}) {
    const movieDetails = useSelector(state => state.movieDetails)
    const {loading,error,movie} = movieDetails

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const [rentMethod,setRentMethod] = useState(null)

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false
    });

    const [rentTime,setRentTime] = useState(null)

    const [price,setPrice] = useState(null)

    const [states, setStates] = React.useState({
        checkA: false,
        checkB: false,
        checkC: false,
    });

     useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
        dispatch(listMovieDetails(match.params.id))
    },[match,history,userInfo,dispatch])

     const submitHandler = (e) => {
        console.log("BUTTON CLICKED",rentMethod);
        e.preventDefault()
        dispatch(createRent(rentMethod,userInfo,movie,price,rentTime))
        history.push('/home')
    }

    const handleChange = (event,data) => {
    setState({ 
        checkedA:false,
        checkedB: false, 
        checkedC: false,
        checkedD: false,
        [event.target.name]: event.target.checked })
    setRentMethod(data)
  };

    const handleChanges = (event,data,datas) => {
        setStates({ 
        checkA:false,
        checkB: false, 
        checkC: false,
        [event.target.name]: event.target.checked })
    setRentTime(data)
    setPrice(datas)
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
                <Row>
                <Col md={8}>
                <p className="h5 text-center mb-4 white-text TextStyle">Duration</p>
                  <p>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={states.checkA}
                                    onChange={ (e) => handleChanges(e,'60','5')}
                                    name="checkA"
                                    color="primary"
                                />
                                }
                                label="1 Minute Price 5 Rs"
                            />
                        </p>
                        <p>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={states.checkB}
                                    onChange={ (e) => handleChanges(e,'14400','50')}
                                    name="checkB"
                                    color="primary"
                                />
                                }
                                label="4 Hours Price 50 Rs"
                            />
                        </p>
                        <p>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={states.checkC}
                                    onChange={ (e) => handleChanges(e,'86400','100')}
                                    name="checkC"
                                    color="primary"
                                />
                                }
                                label="1 Day Price 100 Rs"
                            />
                        </p>
                    </Col>
                    <Col md={15}>
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
                    </Col>
                    </Row>
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

export default Rent;