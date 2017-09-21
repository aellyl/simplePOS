import React, { Component } from 'react';
import ReactDOM from "react-dom"
import * as userActions from "../actions/users"

// import '../App.css';
import { connect } from "react-redux"

class Register extends Component {
    constructor(props){
        super(props);
		
            this.state={registerMessage: ""}
            
            this.onRegisterSubmit=this.onRegisterSubmit.bind(this);
		
	};

	onRegisterSubmit(event) {
		event.preventDefault()
		const email = ReactDOM.findDOMNode(this.refs.email).value
        const password = ReactDOM.findDOMNode(this.refs.password).value
        const username= ReactDOM.findDOMNode(this.refs.username).value
		
		// Passed in via react-redux. Returns a promise.
		this.props.manualRegister({
            username,
			email,
			password
		})
		.then((registerMessage) => {
			if (registerMessage) {
				// report to the user is there was a problem during registration
				this.setState({
					registerMessage
				})			
			}	
		})		

	};

  render() {
    return (
      <div className="container">
      <div className="mdl-card">
    <div className="mdl-card__title ">
    <h2 className="mdl-card__title-text">Register
    </h2>
  </div>
  <div className="mdl-card__supporting-text">
      <form onSubmit={this.onRegisterSubmit}>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="username" ref="username"/>
          <label className="mdl-textfield__label" for="username">Username</label>
      </div> 
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="password" ref="password"/>
          <label className="mdl-textfield__label" for="password">password</label>
      </div>  
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="fname" ref="fname"/>
          <label className="mdl-textfield__label" for="fname">First Name</label>
      </div>  
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="lname" ref="lname"/>
          <label className="mdl-textfield__label" for="lname">Last Name</label>
      </div>  
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="role" ref="role"/>
          <label className="mdl-textfield__label" for="role">Role</label>
      </div>  
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="email" ref="email"/>
          <label className="mdl-textfield__label" for="email">Email</label>
      </div>   
      <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent" type="submit">
                     Register <i className="material-icons">input</i>
      </button>
      <span style={{color: "red"}}>{ this.state.registerMessage }</span>
    
      </form>
  </div>


      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {}
  }
  
const connectedRegister=connect(
      mapStateToProps,
      userActions
  )(Register)

export default connectedRegister;
