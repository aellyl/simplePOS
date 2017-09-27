import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";
import newSale from "./components/newSale";
import nonMember from "./components/nonMember";
import memberCard from "./components/memberCard"
import confirmBox from "./components/confirmBox"
import clerkHome from "./components/clerk"
import orderPanel from "./components/orderPanel"
import payment from "./components/payment"
import onSales from "./components/onsales";
import allItems from "./components/allItems" 


export default (store, history) => {

	const requireAuth = (nextState, replace, callback) => {
		const { user: { authenticated } } = store.getState();
		//console.log("requireAuth current store: ", store.getState());		
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
			<Route path="orderPanel" component={orderPanel}/>
			<Route path="/" component={Login}/>
			{/* <Route path="home" component={Home} onEnter={requireAuth}> */}
			<Route path="home" component={Home}> 
				<IndexRoute component={clerkHome}/>
				<Route path="clerkHome" component={clerkHome}/>
				<Route path="newSale" component={newSale}>
					<IndexRoute component={confirmBox}/>
					<Route path="confirmBox" component={confirmBox}/>
					<Route path="nonMember" component={nonMember}>
						<IndexRoute component={onSales}/>
						<Route path="onsales" component={onSales}/>
						<Route path="allItems" component={allItems}/>	
					</Route>
					<Route path="memberCard" component={memberCard}/>
					<Route path="payment" component={payment}/>

				</Route>
			</Route>
		</Router>	
	)	

}




