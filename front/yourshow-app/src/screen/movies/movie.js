import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {useSelector,useDispatch} from 'react-redux'
import NavBar from "../navbar/navbar"
import BackgroundImage from "../backimgg.jpg"
import "../cssstyle.css"
import {Table,Button,Row,Col,Carousel} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { listMovieDetails } from '../../actions/movieactions'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

function Movie({match,history}) {

	const movieDetails = useSelector(state => state.movieDetails)
    const {loading,error,movie} = movieDetails

    const dispatch = useDispatch()

    //const redirect =  location.search ? location.search.split('=')[1] : '/movie/:id/payment'

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    console.log(movie);
     useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
        dispatch(listMovieDetails(match.params.id))
    },[match,history,userInfo,dispatch])
	return(
		<div style={divStyle} className="TextStyle">
		<NavBar />
		<div className="MovieDetailsY">
			<Row className="MovieDetailsX">
			<Col md={1}>
				<img className='PosterSize' src={movie.poster}/>
			</Col>
			<Col md={8}>
				<p className="TextStyle MoviesTextSize white-text">Name : {movie.moviename}</p>
				<p className="TextStyle MoviesTextSize white-text">Director : {movie.director}</p>
				<p className="TextStyle MoviesTextSize white-text">Release Year : {movie.releaseYear}</p>
				<p className="TextStyle MoviesTextSize white-text">Duration : {movie.duration}</p>
				<p className="TextStyle MoviesTextSize white-text">Language : {movie.language}</p>
			</Col>
			</Row>
			<div className="text-center">
				<LinkContainer to={`/movies/${movie._id}/rent`}>
          			<MDBBtn color="transparent" type="submit" className="white-text">Rent Movie</MDBBtn>
          		</LinkContainer>
        	</div>
			<div className="text-center">
				<LinkContainer to={`/movies/${movie._id}/payment`}>
          			<MDBBtn color="transparent" type="submit" className="white-text" href="">Buy Movie</MDBBtn>
          		</LinkContainer>
       		</div>
		</div>
		</div>
	);
}

export default Movie;