import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Home = () => {
	return (
		<>
			<Row>
				<Col style={{ marginRight: '-1.9rem' }}>
					<Image
						src='https://images.unsplash.com/photo-1574619678486-170400b24bb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
						fluid
					/>
				</Col>
				<Col style={{ marginRight: '-1.9rem' }}>
					<Image
						src='https://images.unsplash.com/photo-1585034722868-115328443114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
						fluid
					/>
				</Col>
				<Col>
					<Image
						src='https://images.unsplash.com/photo-1574619677540-ba3c7b90940b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
						fluid
					/>
				</Col>
			</Row>

			<Row>
				<Col style={{ marginRight: '-1.9rem' }}>
					<Image
						src='https://images.unsplash.com/photo-1492708398880-82c528f414c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
						fluid
					/>
				</Col>
				<Col style={{ marginRight: '-1.9rem' }}>
					<Image
						src='https://images.unsplash.com/photo-1601226809816-b8c32440158a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
						fluid
					/>
				</Col>
				<Col>
					<Image
						src='https://images.unsplash.com/photo-1554843522-a5323421d91b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
						fluid
					/>
				</Col>
			</Row>

			<Jumbotron>
				<Container>
					<h2 style={{ paddingBottom: '1.25rem' }}>Welcome to Recipicks!</h2>
					<p>
						So glad you've decided to give Recipicks a try. I hope you discover
						some great recipes! It's relatively straight forward but head to our{' '}
						<Link to='/about'>About</Link> page to find out more about how it
						works and why I made it. Otherwise feel free to{' '}
						<Link to='/food'>give it a try!</Link>
					</p>
				</Container>
			</Jumbotron>
			<Row style={{marginTop: '-2rem'}}>
				<Col style={{ marginRight: '-1.9rem' }}>
					<Image
						src='https://images.unsplash.com/photo-1596464372839-fd7b1eaea27e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
						fluid
					/>
				</Col>
				<Col style={{ marginRight: '-1.9rem' }}>
					<Image
						src='https://images.unsplash.com/photo-1518393074848-dbe5f641a735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
						fluid
					/>
				</Col>
				<Col>
					<Image
						src='https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
						fluid
					/>
				</Col>
			</Row>
		</>
	);
};

export default Home;
