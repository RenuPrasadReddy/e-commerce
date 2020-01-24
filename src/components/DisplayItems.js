import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import '../styles/styles.css'
import DisplayItem from './DisplayItem'
// import data from '../data/data.json';
// import Nav from './Nav';

class DisplayItems extends React.Component {

   
    render() {

        return (
            <div>

                <div className="cards">
                    <div >
                        <h1 text-align="center" >List of Items</h1>
                        <div >
                            {this.props.itemsList.map((item, index) =>
                                <DisplayItem
                                    key={item.id}
                                    item={item}
                                    index={index}
                                // parentCart={this.handleCart}
                                // parentWishlist={this.handleParentWishlist}
                                >
                                </DisplayItem>)}
                        </div>

                    </div>

                </div>

            </div >


        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemsList: state.itemsList

    }
}

export default withRouter(connect(mapStateToProps)(DisplayItems))
