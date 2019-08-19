import React from 'react'
import './App.scss'

//components
import Home from './components/home'

//router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  	return (
		<Router>
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</React.Fragment>
		</Router>
  	)
}

export default App
