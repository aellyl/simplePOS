import React, { Component } from 'react';
import { Link } from "react-router";

class orderPanel extends Component {


    render() {
        return (

            <div className="mdl-cell mdl-cell--12-col cart">
                <div>
                    <h4>Items in Cart</h4>
                </div>
                
                <ul className="demo-list-control mdl-list">
                    <li className="mdl-list__item" data-lineNo="1">
                        <span className="mdl-list__item-primary-content">
                            Sprouts
                        </span>
                        <span className="mdl-list__item-primary-content">
                            <i className="fa fa-usd" aria-hidden="true"></i>23.00
                        </span>
                        <span className="mdl-list__item-secondary-action">
                            <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
                                <i className="material-icons">remove</i>
                            </button>
                        </span>
                    </li>
                </ul>
    
                <div>
                    <Link to="./payment"><button className="mdl-button paymentBtn">Pay</button></Link>
                </div>
            </div>




        );
    }
}


export default orderPanel;
