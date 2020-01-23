import React from 'react';
import '../styles/styles.css'

import data from '../data/data.json';
import DisplayItem from './DisplayItem'

class DisplayItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsList: [],
            parentCart: [],
            viewCart: false,
            wishlist: [],
            viewWishlist: false
        }
        this.handleParentCart = this.handleParentCart.bind(this);
        this.handleParentWishlist = this.handleParentWishlist.bind(this);
    }

    handleParentCart(cartFromChild) {
        console.log("cartFromChild", cartFromChild);
        this.setState({
            parentCart: [...this.state.parentCart, cartFromChild]
        })
    }

    handleParentWishlist(wishListFromChild) {
        this.setState({
            wishlist: [...this.state.wishlist, wishListFromChild]
        })
    }

    componentDidMount() {
        //  let itemsListArr = data.map( item => item );
        this.setState({ itemsList: data });
        // console.log("itemsList:", this.state.itemsList);
    }
    render() {
        // console.log("itemsList:", this.state.itemsList);

        return (
            <div>
                <div>
                    <h1 text-align="center">List of Items</h1>
                    <div >
                        {this.state.itemsList.map(item =>
                            <DisplayItem
                                key={item.id}
                                item={item}
                                parentCart={this.handleParentCart}
                                parentWishlist={this.handleParentWishlist}
                            >
                            </DisplayItem>)}
                    </div>

                </div>
                <div>
                    <button onClick={() => this.setState({ viewCart: !this.state.viewCart })}>View Cart</button>
                    {this.state.viewCart ? this.state.parentCart : ""}
                </div>
                <div>
                    <button onClick={() => this.setState({ viewWishlist: !this.state.viewWishlist })}>View Cart</button>
                    {this.state.viewWishlist ? this.state.wishlist : ""}
                </div>
            </div>


        )
    }
}

export default DisplayItems