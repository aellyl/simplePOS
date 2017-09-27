import React, { Component } from 'react';


class memberCard extends Component {


    render() {
        return (

            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col mdl-cell--4-offset">
                    <div className="mdl-card mdl-shadow--4dp confirmBox">

                        <div className="mdl-card__supporting-text">
                            <p>Please scan or enter customer's member number</p>
                            <form onSubmit={() => { }}>
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input className="mdl-textfield__input" type="text" id="username" ref="username" />
                                    <label className="mdl-textfield__label" for="username">Memeber Card Number:</label>
                                </div>

                                <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent" type="submit">
                                    send <i className="material-icons">send</i>
                                </button>


                            </form>

                        </div>

                    </div>

                </div>
            </div>


        );
    }
}


export default memberCard;