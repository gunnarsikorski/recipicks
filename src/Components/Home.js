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
						There are days when I want to whip up a delicious meal but I'm
						lacking the inspiration to decide what exactly that will be. Other
						days I may be so indecisive that I end up falling back to a tried
						and true staple, but that can get old! There are even days when I
						just can't find anything in my cookbooks and want to try something
						new.
					</p>
					<p>
						That's where Recipicks takes the reigns. Using the randomizer, you
						can cycle through over 250 dishes that cover breakfast to dinner,
						starters to desert, varying experience levels, and span numerous
						regional profiles. <Link to='/food'>Give it a try!</Link>
					</p>
					<p>
						Recipicks is perfect for a date night in, a dinner party, or even
						just to entertain yourself on a weeknight! Keep in mind some recipes
						may not have tutorial videos, and the measurements are using a
						metric system.
					</p>
					<p>
						Want to do the same thing but for Cocktails?{' '}
						<Link to='/drink'>Try this!</Link>
					</p>
				</Container>
			</Jumbotron>
			<Row>
				<Col></Col>
				<Col></Col>
				<Col></Col>
			</Row>
		</>
	);
};

export default Home;
