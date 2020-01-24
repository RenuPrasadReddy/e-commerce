import React from 'react';
import '../styles/styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeItemFromCart } from "../actions/actions"

function DisplayCart(props) {

    // const removeItemFromCart = (item) => {
    //     props.dispatch
    // }

    return (

        <div className="cards">
            {props.cart.length ? <h2 text-align="center">Cart items</h2> : 'Please select items'}
            {
                (props.cart.length > 0) ?
                    props.cart.map(item => {
                        return (
                            <div key={item.id} className="card">
                                <div style={{ margin: "2px auto" }}>
                                    {item.name}
                                </div>
                                <div style={{ margin: "2px auto" }}>
                                    Weight: {item.netWeight}
                                </div>
                                <div style={{ margin: "2px auto" }}>
                                    Qty: {item.selectedQty}
                                </div>
                                <button className="remove_button" onClick={() => props.removeItem(item)}>Remove</button>
                            </div>)
                    }) : ''
                }
        </div>


        //     <div>
        //     < div className="card" >

        //         <div style={{margin:"2px auto"}}>
        //             {props.item.name}
        //         </div>
        //         <div style={{margin:"2px auto"}}>
        //             {this.props.item.netWeight}
        //         </div>


        //     </div>
        // </div>

    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => dispatch(removeItemFromCart(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayCart)