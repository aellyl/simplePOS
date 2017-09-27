import React, { Component } from 'react';

class onSales extends Component {
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("clicked");
    }

    render() {
        return (



            <div className="mdl-cell mdl-cell--6-col">

                <div className="tbl-header">
                    <table cellPadding="0" cellSpacing="0" >
                        <caption><h5>Products Onsale</h5></caption>
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
                                <td>oranges</td>
                                <td></td>
                                <td>$3.22</td>

                            </tr>
                            <tr onClick={this.handleClick} className="clickable">
                                <td>oranges</td>
                                <td></td>
                                <td>$3.22</td>

                            </tr>
                            <tr onClick={this.handleClick} className="clickable">
                                <td>oranges</td>
                                <td></td>
                                <td>$3.22</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>




        );
    }
}


export default onSales;
