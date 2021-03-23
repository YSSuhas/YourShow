import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "../navbar/navbar"
import BackgroundImage from "../backimgg.jpg"
import "../cssstyle.css"
import {Table,Button,Row,Col,Carousel,Container} from 'react-bootstrap'

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
};

function Home() {
	return(
		<div style={divStyle} className="TextStyle white-text">
		<div>
			<NavBar />
		</div>
			<div className="HomeDetailsY">
			<Container className="HomeSize">
			<Row>
				OTT Database System by,
			</Row>
			<Row className="NameX">
				YS Suhas
			</Row>
			
			<Row>
				Buy or rent movies here
			</Row>
			</Container>
			<Container>
			<Row>
				Buy movies at price 500 each
			</Row>
			<Row>
				Rent movies at price 5 for 1 minute
			</Row>
			<Row>
				Rent movies at price 50 for 4 hours
			</Row>
			<Row>
				Rent movies at price 100 for 1 day
			</Row>
			</Container>
			</div>
		</div>
	);
}

export default Home;