import React , { useState, useEffect, useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import "../cssstyle.css"
import BackgroundImage from "../backimgg.jpg"
import ANavBar from "../navbar/anavbar"
import {useSelector,useDispatch} from 'react-redux'
import { movieregister } from "../../actions/movieactions.js";

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

const MovieFormPage = ({location,history}) => {

const [moviename, setMoviename] = useState('')
const [poster, setPoster] = useState('')
const [releaseYear, setReleaseYear] = useState('')
const [duration, setDuration] = useState('')
const [language, setLanguage] = useState('')
const [director, setDirector] = useState('')

    const dispatch = useDispatch()

    const movieRegister = useSelector(state => state.movieRegister)
    const {success}=movieRegister

    const adminLogin = useSelector(state => state.adminLogin)
    const {adminInfo} = adminLogin

    useEffect(() => {
      if(!adminInfo){
            history.push('/admin/login')
        }
            if(success)
            {
              history.push('/admin/movies')
            }
    },[history,success])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(location.search.split('=')[1]);
        dispatch(movieregister(moviename,poster,releaseYear,duration,language,director))
    }

return (
  <div style={divStyle}>
  <ANavBar />
<MDBContainer className="TextStyle CenterTab">
  <MDBRow>
    <MDBCol md="15">
      <form onSubmit={submitHandler}>
        <p className="h5 text-center mb-4 white-text">Add New Movie</p>
        <div className="white-text">
          <MDBInput label="Movie Name" icon="film" group type="text" validate error="wrong"
            success="right" className="white-text" value={moviename} onChange  = { (e) => setMoviename(e.target.value) } />
          <MDBInput label="Poster" icon="image" group type="text" validate error="wrong"
            success="right" className="white-text" value={poster} onChange  = { (e) => setPoster(e.target.value) } />
          <MDBInput label="Release year" icon="calendar" group type="text" validate error="wrong"
            success="right" className="white-text" value={releaseYear} onChange  = { (e) => setReleaseYear(e.target.value) } />
          <MDBInput label="Duration" icon="clock" group type="number" validate className="white-text" value={duration} onChange  = { (e) => setDuration(e.target.value) } />
          <MDBInput label="Language" icon="language" group type="text" validate error="wrong" success="right"className="white-text" value={language} onChange={(e) => setLanguage(e.target.value)} />
          <MDBInput label="Director" icon="user-tie" group type="text" validate error="wrong" success="right"className="white-text" value={director} onChange={(e) => setDirector(e.target.value)} />
        </div>
        <div className="text-center">
          <MDBBtn color="transparent" type="submit" className="white-text">Add Movie</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
);
};

export default MovieFormPage;