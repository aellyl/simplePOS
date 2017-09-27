import React, { Component } from 'react';
import { Link } from "react-router";


class confirmBox extends Component {


    render() {
        return (

            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--6-col mdl-cell--4-offset">
            <div className="mdl-card mdl-shadow--4dp confirmBox">

            <div className="mdl-card__supporting-text">
              Is this Customer a Member?
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <Link to="/home/newSale/memberCard"><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-button mdl-js-ripple-effect">
                Yes
              </button></Link>
              <Link to="/home/newSale/nonMember"><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-button mdl-js-ripple-effect">
                No
              </button></Link>
            </div>

          </div>
          </div>
          </div>

        );
    }
}


export default confirmBox;
