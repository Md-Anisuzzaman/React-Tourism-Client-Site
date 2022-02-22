
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
import AuthProvider from './Context-Api/AuthProvider';
import ManageBooking from './ManageBooking/ManageBooking';
import AddService from './AddService/AddService';


function App() {

  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/header">
              <Header></Header>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/addservice">
            <AddService></AddService>
            </Route>
            <Route exact path="/managebooking">
              <ManageBooking></ManageBooking>
            </Route>
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
