import React from 'react';
import '../styles/styles.css'

class DisplayItem extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     cart: [],
    //     //     wishList: []
    //     // }
    // }

    handleCart(e, item){
        // console.log("item :", item);

        // this.setState({
        //     cart:[...this.state.cart, item.name]
        // }, () => {
        //     console.log(this.state.cart);
            this.props.parentCart(item.name);
        // });
    }

    handleWishlist(e, item){
        // console.log("item :", item);

        // this.setState({
        //     cart:[...this.state.cart, item.name]
        // }, () => {
        //     console.log(this.state.cart);
            this.props.parentWishlist(item.name);
        // });
    }

    render() {
        return (
            
            <div>
                {/* {this.state.cart} */}
                <div className="flex-container">
                    <div className="data">
                        {this.props.item.name}
                    </div>
                    <div className="data">
                        {this.props.item.netWeight}
                    </div>
                    <div className="data">
                        <button onClick={(e) => this.handleCart(e, this.props.item)}>Add to Cart</button>
                    </div>
                    <div className="data">
                        <button onClick={ e => this.handleWishlist(e, this.props.item)}>Add to wishlist</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default DisplayItem;