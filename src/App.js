import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Random from './Components/Random'

// import Meal from './Components/Meal'

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
