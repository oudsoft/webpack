/* App.js */
import React from 'react'
import { hot } from 'react-hot-loader'
import './App.css'
import logo from '../assets/images/logo.png'

const App = () => (
	<div id="main">
		<img src={logo} />
		<h1>Webpack React Setup.</h1>
	</div>
)
  
//export default App
export default hot(module)(App)