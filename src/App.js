import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';


// import Dummy from './components/Dummy'
import DisplayItems from './components/DisplayItems'
import Nav from './components/Nav';
import DisplayCart from './components/DisplayCart'
import DisplayWishlist from './components/DisplayWishlist'
import DisplayDetails from './components/DisplayDetails';

function App({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <div>
          <Switch>
            <Route path='/' exact component={DisplayItems} />
            <Route path='/cart' component={DisplayCart} />
            <Route path='/Wishlist' component={DisplayWishlist} />
            <Route path='/details' component={DisplayDetails} />
          </Switch>

        </div>

      </Router>
    </Provider >
  );
}

export default App;
