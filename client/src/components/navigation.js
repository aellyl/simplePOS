import React, { Component } from 'react';
// import ReactDOM from "react-dom"
import * as userActions from "../actions/users";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router";
import axios from "axios";
import PropTypes from 'prop-types'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state={
            last_login: ""
        }

        this.logout = this.logout.bind(this);
    };

    static propTypes = {
        location: PropTypes.object.isRequired
      }


    logout(event) {
        event.preventDefault()
        console.log("logout event");
        this.props.manualLogout();
    };

    render() {
        const { location} = this.props

        return (


  <header className="mdl-layout__header mdl-layout__header--transparent nav">
    <div className="mdl-layout__header-row">
      <h2 className="mdl-layout__title">Simple POS</h2>
      <div className="mdl-layout-spacer"></div>
      <nav className="mdl-navigation">
          {
            location.pathname ==="/home" &&  <Link to="/home/newSale"><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent padLeft">New Sale</button></Link>
            
          }
        
        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored padLeft" onClick={this.logout}><i className="material-icons">exit_to_app</i></button>
      </nav>
      {/* <span>Last login time:{this.props.last_login}</span> */}
  
    </div>
  </header>





        );
    }
}

//connect Navigation component with withRouter component 
const NavigationWithRouther = withRouter(Navigation);

const mapStateToProps = (state) => {

    return {}
    

}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
const connectedNav = connect(
    mapStateToProps,
    userActions
)(NavigationWithRouther)


export default connectedNav;
