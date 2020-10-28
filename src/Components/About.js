import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const About = () => {
    return (
			<>
				<Row>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1579366948929-444eb79881eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1596313760059-94928272cc55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col>
						<Image
							src='https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
				</Row>
				<Jumbotron>
					<Container>
						<h2
							style={{
								paddingBottom: '1.25rem',
								borderBottom: 'solid',
								borderWidth: 'thin',
								marginBottom: '1.5rem',
							}}>
							About Recipicks
						</h2>

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
							regional profiles. <Link to='/food'>Give it a try!</Link> Want to
							do the same thing, but for Cocktails?{' '}
							<Link to='/drink'>Try this!</Link>
						</p>
						<p>
							Recipicks is perfect for a date night in, a dinner party, or even
							just to entertain yourself on a weeknight! Keep in mind some
							recipes may not have tutorial videos, and the measurements are
							using a metric system.
						</p>
					</Container>
				</Jumbotron>

				<Row style={{ marginTop: '-2rem' }}>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1582623206169-985dbfb8e738?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1593329344473-6a9dfc15dc3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80'
							fluid
						/>
					</Col>
					<Col>
						<Image
							src='https://images.unsplash.com/photo-1590080876477-fa40830fe6f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
				</Row>
				<Row style={{ marginTop: '-.05rem' }}>
					<Col style={{ marginRight: '-2rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1600332062685-9192c8cc948c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1535140728325-a4d3707eee61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col>
						<Image
							src='https://images.unsplash.com/photo-1542444459-db37a5da9d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
				</Row>
			</>
		);
};

export default About;