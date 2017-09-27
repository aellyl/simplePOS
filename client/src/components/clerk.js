import React, { Component } from 'react';
import { Link } from "react-router";

class clerkHome extends Component {


    render() {
        return (


            <main className="mdl-layout__content">

                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset">
                        <div className="mdl-card mdl-shadow--4dp">
                            <div className="mdl-card__title clerk">
                                <h2 className="mdl-card__title-text">Hello Jane</h2>
                            </div>
                            <div className="mdl-card__supporting-text">
                                <p>Welcome Back!</p>
                            </div>
                            <div className="mdl-card__actions">
                                <Link to="/home/newSale"><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-button mdl-js-ripple-effect">
                                    New Sale
              </button></Link>

                            </div>

                        </div>
                    </div>



                    <div className="mdl-shadow--4dp mdl-cell mdl-cell--8-col mdl-cell--2-offset">
                        <div className="mdl-card mdl-cell--12-col">
                            <div className="mdl-card__title">
                                <h2 className="mdl-card__title-text">Your Performance <i className="fa fa-bar-chart padLeft" aria-hidden="true"></i></h2>
                            </div>
                            <div className="mdl-card__supporting-text">
                                <p>BarChart</p>
                            </div>
                            <div className="mdl-card__supporting-text">
                                <p>Other Charts</p>
                            </div>

                        </div>
                    </div>
                </div>






            </main>

        );
    }
}


export default clerkHome;
