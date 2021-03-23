import React from 'react';
import ReactDOM from 'react-dom';
import ANavBar from "../navbar/anavbar"
import BackgroundImage from "../backimgg.jpg"
import "../cssstyle.css"
import {Table,Button,Row,Col,Carousel,Container} from 'react-bootstrap'

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

function AHome() {
	return(
		<div style={divStyle} className="TextStyle white-text">
		<div>
			<ANavBar />
		</div>
			<div>
			<Container className="HomeDetailsY HomeSize">
			<Row>
				OTT Database System by,
			</Row>
			<Row className="NameX">
				YS Suhas
			</Row>
			<Row>
				Add or delete movies here
			</Row>
			</Container>
			</div>
		</div>
	);
}

export default AHome;