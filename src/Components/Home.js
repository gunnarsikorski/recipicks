import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
			<div>
				<h2>Welcome to Recipicks!</h2>
				<p>
					There are days when I want to whip up a delicious meal but maybe I'm
					lacking the inspiration to decide what exactly that will be. Other
					days I may be so indecisive that I end up falling back to a tried and
					true staple, but that can get old! There are even days when I just
					can't find anything in my cookbooks and want to try something new.
					That's where Recipicks takes the reigns. Using the randomizer, I can
					cycle through a plethora of dishes that cover breakfast to dinner,
					starters to desert, varying experience levels, and span numerous
					regional profiles. <Link to='/randomize'>Give it a try!</Link>
				</p>
			</div>
		);
};

export default Home;