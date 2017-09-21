import React, { Component } from 'react';
import ReactDOM from "react-dom"
import * as userActions from "../actions/users"
import '../App.css';
import { connect } from "react-redux"

class Login extends Component {
    constructor(props){
        super(props);
		
            this.state={loginMessage: ""}
            
            this.onLoginSubmit=this.onLoginSubmit.bind(this);
		
	};

	onLoginSubmit(event) {
		event.preventDefault()
	
        const password = ReactDOM.findDOMNode(this.refs.password).value
        const username= ReactDOM.findDOMNode(this.refs.username).value
		
		// Passed in via react-redux. Returns a promise.
		this.props.manualLogin({
            username,
			password
		},this.props.nextPathname)
		.then((loginMessage) => {
			if (loginMessage) {
				// report to the user is there was a problem during login
				this.setState({
					loginMessage
				})			
			}	
		})		

	};
  render() {
    return (
      <div className="container">
      <div className="mdl-card"></div>
      <div className="mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title signin">
          <h2 className="mdl-card__title-text">Login</h2>
        </div>
        <div className="mdl-card__supporting-text">
        <span style={{color: "red"}}>{ this.state.loginMessage }</span>
            <form onSubmit={this.onLoginSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="username" ref="username"/>
                <label className="mdl-textfield__label" for="username">Username</label>
            </div> 
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="password" ref="password"/>
                <label className="mdl-textfield__label" for="password">password</label>
            </div>   
            <button className="loginBtn mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent" type="submit">
                           GO <i className="material-icons">directions_run</i>
            </button>

            <div className="footer"><a href="#">Forgot your password?</a></div>
            </form>
          
        </div>
       
      </div>
    
      </div>
    );
  }
}

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
// The second argument "ownProps" contains props passed to the component
const mapStateToProps = (state, ownProps) => {	
    
        let nextPathname = "/home"
    
        try {nextPathname = ownProps.location.state.nextPathname}
        catch(err) {}
    
        return {
            user: state.user,
            nextPathname // this prop passed in by React Router
        }
    
    }
    
    // Connects React component to the redux store
    // It does not modify the component class passed to it
    // Instead, it returns a new, connected component class, for you to use.
const connectedLogin= connect(
        mapStateToProps,
        userActions
    )(Login)

export default connectedLogin;
