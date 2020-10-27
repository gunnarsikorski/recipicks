import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
			<div>
				<nav>
					<Link to='/'>
						<h1>Recipicks</h1>
					</Link>
					<Link to='/randomize'>
						<h4>Randomize</h4>
					</Link>
				</nav>
			</div>
		);
};

export default Header;