import React from 'react';
import '../styles/styles.css'
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

 function DisplayWishlist(props) {
    return (
        <div className="cards">
            {props.wishlist.length ? <h2 text-align="center">WishList</h2>: 'Please select items'}
                {
                    props.wishlist.map(item => {
                        return (
                            <div key={item.id} className="card">
                                <div style={{ margin: "2px auto" }}>
                                    {item.name}
                                </div>
                                <div style={{ margin: "2px auto" }}>
                                    {item.netWeight}
                                </div>
                            </div>)
                    })
                }
            </div>
    )
}
const mapStateToProps = ( state => {
    return{
        wishlist: state.wishlist
    }
})

export default connect(mapStateToProps)(DisplayWishlist)