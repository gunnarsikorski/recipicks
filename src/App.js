import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Random from './Components/Random'
import Drink from './Components/Drink';
import About from './Components/About';

// import Meal from './Components/Meal'

function App() {
  
  return (
		<div>
			<Header />
			
      <main>
        <Route path='/' exact component={Home} />
        <Route path='/food' component={Random}/>
        <Route path='/drink' component={Drink}/>
        <Route path='/about' component={About} />
        
        
      </main>
		</div>
	);
}

export default App;
