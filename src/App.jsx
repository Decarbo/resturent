import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Menu from './pages/Menu';
import Home from './pages/Home';
import PageNotFound from './pages/pageNotFound';

function App() {
	return (
		<>

			


			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/menu" element={<Menu/>}/>
				<Route path="*"     element={<PageNotFound/>}/>
			</Routes>
		

		</>
	

		
		
		
			
		
	);
}

export default App;
