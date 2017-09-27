import React, { Component } from 'react';
import OrderPanel from "./orderPanel"
import { Link } from "react-router";




class nonMember extends Component {
  


    render() {
        return (

            <div className="nonMemberContainer">
               
            <section className="mdl-grid">
                
                {this.props.children}
                
                <div className="mdl-cell mdl-cell--6-col">
                    <OrderPanel />
                </div>

                
            </section>

            <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--1-col">
             <Link to="/home/newSale/nonMember/onsales"><button className="mdl-button">Default</button></Link>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
              <Link to="/home/newSale/nonMember/allItems"> <button className="mdl-button">All Items</button></Link>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
                <Link to="/home"><button className="mdl-button"> Cancel Sale</button></Link>
                </div>
            </div>
            </div>


        );
    }
}


export default nonMember;
