import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "../navbar/navbar"
import BackgroundImage from "../backimgg.jpg"
import "../cssstyle.css"

const divStyle = {
  width: '100%',
  height: '775px',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

function TvSeries() {
	return(
		<div style={divStyle} className="TextStyle">
		<div>
			<NavBar />
		</div>
		</div>
	);
}

export default TvSeries;