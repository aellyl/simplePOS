import React, { Component } from 'react';

class allItems extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("clicked");
    }

    render() {
        return (



            <div className="mdl-cell mdl-cell--6-col">


                <div className="tbl-header">
                    <div className="mdl-cell mdl-cell--8-col mdl-cell--2-offset">
                        <form>
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input" type="text" id="search" ref="search" />
                                <label className="mdl-textfield__label" for="search">Search</label>

                            </div>
                            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab">
                                <i className="material-icons">search</i>
                            </button>

                        </form>
                    </div>
                    <table cellPadding="0" cellSpacing="0" >
                        <thead>
                            <tr>
                                <th>Prodcut Name</th>
                                <th></th>
                                <th>Price</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" >
                        <tbody>
                            <tr onClick={this.handleClick} className="clickable">
                                <td>Sprouts</td>
                                <td></td>
                                <td>$1.38</td>

                            </tr>
                            <tr onClick={this.handleClick} className="clickable">
                                <td>tomatoes</td>
                                <td></td>
                                <td>$2.38</td>

                            </tr>
                            <tr onClick={this.handleClick} className="clickable">
                                <td>oranges</td>
                                <td></td>
                                <td>$3.22</td>

                            </tr>
                            <tr onClick={this.handleClick} className="clickable">
                                <td>Strawberries</td>
                                <td></td>
                                <td>$5.99</td>

                            </tr>
                            <tr onClick={this.handleClick} className="clickable">
                                <td>corns</td>
                                <td></td>
                                <td>$1.00</td>

                            </tr>
                            <tr onClick={this.handleClick} className="clickable">
                                <td>rice</td>
                                <td></td>
                                <td>$7.34</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>




        );
    }
}


export default allItems;
