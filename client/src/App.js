import './App.css'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './components/Home.js';
import {Results} from './components/Navbar.js'
import List from './components/List.js'
import Astronaut from './pages/Astronaut.js'
import About from './components/About.js'
import Accountant from './pages/Accountant.js'
import Abattoir from './pages/Abattoir Operative.js'
import Accomodation from './pages/Accomodation Warden.js';
import AccountantM from './pages/Accountant Management.js'
import Actor from './pages/Actor.js'
import Actuary from './pages/Actuary.js'
import Acupuncturist from './pages/Acupuncturist.js'
import AdministrativeA from './pages/Administrative Assistant or Office-Courts.js'
import AdvertisingAE from './pages/Advertising Account Executive.js'
import AdvertisingAP from './pages/Advertising Account Planner.js'
import AdviceW from './pages/Advice Worker.js'
import AdvertisingC from './pages/Advertising Copywriter.js'
import Advocate from './pages/Advocate.js'
import AdvocatesC from './pages/Advocates Clerk.js'
import AerialSI from './pages/Aerial and Satellite Installer.js'
import AerospaceE from './pages/Aerospace Engineer.js'
import AgricultureHS from './pages/Agriculture or Horticulture Scientist.js'
import AirCC from "./pages/Air Cabin Crew.js"
import AirCE from "./pages/Air Conditioning Engineer.js"
import AirQC from "./pages/Air Quality Consultant.js"
import Doctor from "./pages/Doctor.js"
import AirTC from "./pages/Air Traffic Controller.js"
import Signup from "./components/Signup"
import Login from './components/Login'
import {Provider} from 'react-redux'
import Layout from './hoc/Layout'
import store from './store'
// import mongoose from 'mongoose'
// // import Results from './components/Results.js'
// var db = mongoose.connection
// console.log(db)
class App extends Component {
  
  render() {
  return (
      <div className="App">
        <div className = "content">
          <Provider store = {store}>
            <Layout/>
            <Switch>
                <Route path = "/signup" component={Signup}/>
                <Route path = "/login" component = {Login}/>
                <Route exact path = "/" component={Home}/>
                <Route path = "/List" component={List}/>
                <Route path = "/Astronaut" component={Astronaut}/>
                <Route path = "/About" component={About}/>
                <Route path = "/Results" component>{Results}</Route>
                <Route path = "/Accountant" component>{Accountant}</Route>
                <Route path = "/Abattoir Operative" component>{Abattoir}</Route>
                <Route path = "/Accomodation Warden" component>{Accomodation}</Route>
                <Route path = "/Accountant-Management" component>{AccountantM}</Route>
                <Route path = "/Actor" component>{Actor}</Route>
                <Route path = "/Actuary" component>{Actuary}</Route>
                <Route path = "/Acupuncturist" component>{Acupuncturist}</Route>
                <Route path = "/Administrative Assistant or Office-Courts" component>{AdministrativeA}</Route>
                <Route path = "/Advertising Account Executive" component>{AdvertisingAE}</Route>
                <Route path = "/Advertising Account Planner" component>{AdvertisingAP}</Route>
                <Route path = "/Advice Worker" component>{AdviceW}</Route>
                <Route path = "/Advertising Copywriter" component>{AdvertisingC}</Route>
                <Route path = "/Advocate" component>{Advocate}</Route>
                <Route path = "/Advocates Clerk" component>{AdvocatesC}</Route>
                <Route path = "/Aerial and Satellite Installer" component>{AerialSI}</Route>
                <Route path = "/Aerospace Enginner" component>{AerospaceE}</Route>
                <Route path = "/Agricultural or Horticultural Scientist" component>{AgricultureHS}</Route>
                <Route path = "/Air Cabin Crew" component>{AirCC}</Route>
                <Route path = "/Air Conditioning Engineer" component>{AirCE}</Route>
                <Route path = "/Air Quality Consultant" component>{AirQC}</Route>
                <Route path = "/Doctor" component>{Doctor}</Route>
                <Route path = "/Air Traffic Controller" component>{AirTC}</Route>
                <Redirect to = "/" />
            </Switch>
            </Provider>
        </div>
        {/* <Results /> */}
        <Footer />
      </div>
    );
  }
}

export default App;