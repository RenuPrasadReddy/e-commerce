import React from 'react';
import '../styles/styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div>
            <nav className="nav">
                <Link style={{ color: "black", textDecoration: 'none' }} to='/'>
                    <h3>FABRIK</h3>
                </Link>
                <ul className='nav-links'>
                    <Link style={{ color: "black", textDecoration: 'none' }} to='/cart'>
                        <li>Cart</li>
                    </Link>

                    <Link style={{ color: "black", textDecoration: 'none' }} to='/wishlist'>
                        <li>Wishlist</li>
                    </Link>

                </ul>
            </nav>
        </div>


    )
}