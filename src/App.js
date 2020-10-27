import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Random from './Components/Random'

function App() {
  return (
		<div>
			<Header />
			
      <main>
        <Route path='/' exact component={Home} />
        <Route path='/randomize' component={Random}/>
      </main>
		</div>
	);
}

export default App;
