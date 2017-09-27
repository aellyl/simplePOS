import React, { Component } from 'react';


class newSale extends Component {


    render() {
        return (

            <main className="mdl-layout__content">
                {/* new Sale components
                go to modal- ask if the customer is a member
                go to modal - scan member num
                go to order - 
                    nav- default, allitem, cancel Sale , pay
                    Default view - order panel, customer's top 5 item bought, on sale items
                    AllItem view- order panell, all items */}
                
                {/* <confirmBox confirmMessage="Is this customer a member?"/> */}
                
                {this.props.children}

            </main>




        );
    }
}


export default newSale;
