import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import Register from "./components/register"
import Login from "./components/login"
import Home from "./components/home"


export default (store, history) => {

	const requireAuth = (nextState, replace, callback) => {
		const { user: { authenticated } } = store.getState();
		console.log("requireAuth current store: ", store.getState());		
		if (!authenticated) {			
			// Takes a Location object
			// https://github.com/mjackson/history/blob/master/docs/Location.md
			replace({
				pathname: "/",
				state: { nextPathname: nextState.location.pathname }
			})
		}
		callback()
	}	

	return( 
		<Router history={history}>
			<Route path="/" component={Login}>
				{/* <IndexRoute component={Default} /> */}
				{/* <Route path="login" component={LoginContainer} /> */}
				{/* <Route path="register" component={RegisterContainer} /> */}	
			</Route>	
			<Route path="home" component={Home} onEnter={requireAuth} />
		</Router>	
	)	

}




