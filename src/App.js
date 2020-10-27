import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'

function App() {
  return (
		<div>
			<Header />
			
      <main>
        <Route path='/' exact component={Home} />
      </main>
		</div>
	);
}

export default App;
