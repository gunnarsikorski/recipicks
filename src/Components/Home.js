import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
			<Jumbotron>
				<Container>
					<h2 style={{paddingBottom: '1.25rem'}}>Welcome to Recipicks!</h2>
					<p>
						There are days when I want to whip up a delicious meal but I'm
						lacking the inspiration to decide what exactly that will be. Other
						days I may be so indecisive that I end up falling back to a tried
						and true staple, but that can get old! There are even days when I
						just can't find anything in my cookbooks and want to try something
						new.
					</p>
					<p>
						That's where Recipicks takes the reigns. Using the randomizer,
						you can cycle through over 250 dishes that cover breakfast to
						dinner, starters to desert, varying experience levels, and span
						numerous regional profiles.{' '}
						<Link to='/randomize'>Give it a try!</Link>
					</p>
				</Container>
			</Jumbotron>
		);
};

export default Home;