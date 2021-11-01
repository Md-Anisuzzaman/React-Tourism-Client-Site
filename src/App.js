
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';
import Header from './Home/Header';
import Banner from './Home/Banner';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import BookingDetails from './Services/BookingDetails';
import Services from './Services/Services';
import PrivateRoute from './Private/PrivateRoute';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthProvider from './Context-Api/AuthProvider';


function App() {

  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          {/* <Login></Login> */}
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/header">
              <Header></Header>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            {/* <PrivateRoute exact path="/bookingdetalis">
              <BookingDetails></BookingDetails>
            </PrivateRoute > */}
            <PrivateRoute exact path="/bookingdetails/:bookingdetailsid">
              <BookingDetails></BookingDetails>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact" >
              <Contact></Contact>
            </Route>
            <Route exact path="/login" >
              <Login></Login>
            </Route>
            <Route exact path="*" >
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
