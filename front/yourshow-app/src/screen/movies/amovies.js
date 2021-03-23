import React, { useState, useEffect, useRef } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import ReactDOM from 'react-dom';
import ANavBar from "../navbar/anavbar"
import BackgroundImage from "../backimgg.jpg"
import "../cssstyle.css"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {Table,Button,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { listMovies } from '../../actions/movieactions'
import {LinkContainer} from 'react-router-bootstrap'

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

function AMovies({ history }) {
	const movieList = useSelector(state => state.movieList)
    const {loading,error,movies} = movieList

    const dispatch = useDispatch()

    const adminLogin = useSelector(state => state.adminLogin)
    const {adminInfo} = adminLogin
    console.log(movies);
     useEffect(() => {
        if(!adminInfo){
            history.push('/admin/login')
        }
        dispatch(listMovies())
    },[history,adminInfo,dispatch])
	return(
		<div style={divStyle} className="TextStyle">
		<div>
			<ANavBar />
		</div>
			<MDBBtn href="/admin/movies/register" color="transparent" className="white-text VerticalCenter"> Add Movie </MDBBtn>
			<div className="MovieFlex Movies">
				{movies.map(movie => {
			return(
				<div>
				<LinkContainer to={`/admin/movies/${movie._id}`}>
				<img className="MoviesRow" src={movie.poster}/>
				</LinkContainer>
				<LinkContainer to={`/admin/movies/${movie._id}`}>
				<p className="TextStyle MoviesTextSize white-text">{movie.moviename}</p>
				</LinkContainer>
				</div>
				)
		})}
			</div>
		</div>
	);
}

export default AMovies;