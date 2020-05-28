import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

//import pages
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import AllShoes from '../AllShoes/AllShoes';
import BuyPage from '../BuyPage/BuyPage';
import SellPage from '../SellPage/SellPage';
import TradePage from '../TradePage/TradePage';
import MyShoes from '../MyShoes/MyShoes';
import PostDetails from '../PostDetails/PostDetails';
import CreatePost from '../CreatePost/CreatePost';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import ShoeBox from '../ShoeBox/ShoeBox';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* display rest of pages without being protected. */}
            <HomePage path="/home" />
            <AllShoes exact path="/allShoes" />
            <BuyPage exact path="/buy" />
            <SellPage exact path="/sell" />
            <TradePage exact path="/trade" />
            <MyShoes exact path="/myShoes" />
            <PostDetails exact path="/details" />
            <CreatePost exact path="/create" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/about" component={AboutPage}/>
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path="/account" component={UserPage}/>
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <Route exact path="/shoeBox" component={ShoeBox}/>
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
