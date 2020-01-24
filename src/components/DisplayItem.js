import React from 'react';

import '../styles/styles.css'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import akshay from '../assests/images/akshay.jpg'
import DisplayDetails from './DisplayDetails'

import { addToCart, addToWishlist, addRemoveQuantity } from '../actions/actions'

class DisplayItem extends React.Component {

    handleCart = (e, item) => {
        this.props.dispatch(addToCart(item))
    }

    handleWishlist = (e, item) => {

        this.props.dispatch(addToWishlist(item));

    }

    handleQuantity = (e, index) => {
         this.props.dispatch(addRemoveQuantity(e.target.value, index));
        // console.log("value:", e.target.value);
    }

    displayDetails = (item) => {
        // <DisplayDetails item={this.props.item}

    }

    render() {
        return (
            //   <Link style = {{color: 'black', textDecoration: 'none'}} to='/details'>
            <div>
                < div className="card" onClick={() => this.displayDetails(this.props.item)} >

                    <div style={{ margin: "2px auto" }}>
                        {this.props.item.name}
                    </div>
                    <div style={{ margin: "2px auto" }}>
                        {this.props.item.netWeight}
                    </div>
                    <div>
                        <input className="number" placeholder="Qty" min="1" max={this.props.item.quantity} type="number" onChange={(e) => this.handleQuantity(e,this.props.index)} />
                    </div>
                    <div >
                        <button className="button" onClick={(e) => this.handleCart(e, this.props.item)}>Add to Cart</button>
                    </div>
                    <div >
                        <button className="button" onClick={e => this.handleWishlist(e, this.props.item)}>Add to wishlist</button>
                    </div>

                </div>
            </div>

            //   </Link>


        );
    }
}
// const mapDispatchToProps = (dispatch,ownProps) => {
//     return {
//         addToCart: () => dispatch({ type: 'ADD_TO_CART', itemToBeAdded: ownProps.item })
//     }
// }
export default withRouter(connect()(DisplayItem));