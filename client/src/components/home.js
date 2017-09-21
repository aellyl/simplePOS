import React, { Component } from 'react';
// import ReactDOM from "react-dom"
import * as userActions from "../actions/users";
import '../App.css';
import { connect } from "react-redux";

class Home extends Component {
    constructor (props){
        super(props);
        this.logout=this.logout.bind(this);
    };

    logout(event) {
        event.preventDefault()
        console.log("logout event");
		this.props.manualLogout();
    };
    
  render() {
    return (
      <div>You are IN!!!
          <button onClick={this.logout}>Logout</button>
      </div>
    //   <button onClick={this.logout}>log out</button>
      
    );
  }
}

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
// The second argument "ownProps" contains props passed to the component
const mapStateToProps = (state) => {	
    
    return {};
    
    }
    
    // Connects React component to the redux store
    // It does not modify the component class passed to it
    // Instead, it returns a new, connected component class, for you to use.
const connectedHome= connect(
        mapStateToProps,
        userActions
    )(Home)

export default connectedHome;
