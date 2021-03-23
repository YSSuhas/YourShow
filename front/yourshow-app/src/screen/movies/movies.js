import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {useSelector,useDispatch} from 'react-redux'
import NavBar from "../navbar/navbar"
import BackgroundImage from "../backimgg.jpg"
import "../cssstyle.css"
import {Table,Button,Row,Col,Carousel} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { listMovies } from '../../actions/movieactions'

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

function Movies({history}) {

	const movieList = useSelector(state => state.movieList)
    const {loading,error,movies} = movieList

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    console.log(movies);
     useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
        dispatch(listMovies())
    },[history,userInfo,dispatch])
	return(
		<div style={divStyle} className="TextStyle">
		<NavBar />
		<div className="MovieFlex Movies">
		{movies.map(movie => {
			return(
				<div>
				<LinkContainer to={`/movies/${movie._id}`}>
				<img className="MoviesRow" src={movie.poster}/>
				</LinkContainer>
				<LinkContainer to={`/movies/${movie._id}`}>
				<p className="TextStyle MoviesTextSize white-text">{movie.moviename}</p>
				</LinkContainer>
				</div>
				)
		})}
		</div>
		</div>
	);
}

export default Movies;



