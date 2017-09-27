import React, { Component } from 'react';
import Navigation from "./navigation";

class Home extends Component {


    render() {
        return (

            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Navigation/>
                {this.props.children}
            
            </div>




        );
    }
}


export default Home;
