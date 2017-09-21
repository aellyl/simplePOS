import axios from "axios"
import { browserHistory } from "react-router"
import * as types from "../constants"

// "Log In" action creators
function beginLogin() {
	return { type: types.MANUAL_LOGIN_USER }
}

function loginSuccess(data) {
	return { 
		type: types.LOGIN_SUCCESS_USER,
		data
	}
}

function loginError() {
	return { type: types.LOGIN_ERROR_USER }
}

// "Log Out" action creators
function beginLogout() {
	return { type: types.LOGOUT_USER }
}

function logoutSuccess() {
	return { type: types.LOGOUT_SUCCESS_USER }
}

function logoutError() {
	return { type: types.LOGOUT_ERROR_USER }
}

// "Register" action creators
function beginRegister() {
	return { type: types.REGISTER_USER }
}

function registerSuccess() {
	return { type: types.REGISTER_SUCCESS_USER }
}

function registerError() {
	return { type: types.REGISTER_ERROR_USER }
}

function makeUserRequest(method, data, api="/login") {
	// returns a Promise
	return axios({
		method: method,
		url: api,
		data: data
	})
}

// Example of an Async Action Creator
// http://redux.js.org/docs/advanced/AsyncActions.html
export function manualLogin(
		data,
		successPath // path to redirect to upon successful log in
	) {	
	return dispatch => {
		dispatch(beginLogin())

		return makeUserRequest("post", data, "/login")	
			.then(response => {
				if (response.data.success) {
					console.log("in login users action: ", response.data.success);					
					dispatch(loginSuccess(data))
					// use browserHistory singleton to control navigation. Will generate a 
					// state change for time-traveling as we are using the react-router-redux package
					console.log("succesPath: ",successPath);
					browserHistory.push(successPath)
				} else {					
					dispatch(loginError())
					let loginMessage = response.data.message
					return loginMessage					
				}
			})
			.catch(function (response) {
			    if (response instanceof Error) {
			      // Something happened in setting up the request that triggered an Error
			      console.log('Error', response.message);
			    }
		    })					
	}
}

// Example of an Async Action Creator
// http://redux.js.org/docs/advanced/AsyncActions.html
export function manualLogout() {
	return dispatch => {
		console.log("in user action manualLogout");
		dispatch(beginLogout());
		//console.log("after dispatch beginLougout");
		//console.log(axios.get("/logout"));
		return axios({
			method: "get",
			url: "http://localhost:3001/logout"
		}).then(response => {
				console.log("in manualLogout: ",response);
				if (response.data.success) {
					dispatch(logoutSuccess())
					// use browserHistory singleton to control navigation. Will generate a 
					// state change for time-traveling as we are using the react-router-redux package
					browserHistory.push("/") // logout to home page
				} else {
					dispatch(logoutError())
				}
			})
			.catch(response => {
				// console.log("error log all response: ",response);
			    if (response instanceof Error) {
			      // Something happened during logout that triggered an Error
			      console.log('Error', response.message);
			    }
			})
	}			
}

export function manualRegister(data) {	
	console.log("in manual Register: ", data);
	
	return dispatch => {
		dispatch(beginRegister())

		return makeUserRequest("post", data, "/register")	
			.then(response => {
				if (response.data.success) {					
					dispatch(registerSuccess())
					dispatch(manualLogin(data, "/"))
				} else {					
					dispatch(registerError())
					console.log("register erro: ",response);
					let registerMessage = response.data.message
					return registerMessage
				}
			})
			.catch(response => {
			    if (response instanceof Error) {
			      // Something happened in setting up the request that triggered an Error
			      console.log('Error', response.message);
			    }
		    })
	}

}