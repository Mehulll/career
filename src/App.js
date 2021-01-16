import './App.css'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home.js';
import NavbarNew from './components/Navbar';
import List from './components/List.js'
import Astronaut from './components/Astronaut.js'
import About from './components/About.js'

class App extends Component {
  render() {
  return (
      <div className="App">
        <NavbarNew />
        <div className = "content">
          <Switch>
              <Route exact path = "/" component>{Home}</Route>
              <Route path = "/List" component>{List}</Route>
              <Route path = "/Astronaut" component>{Astronaut}</Route>
              <Route path = "/About" component>{About}</Route>
              <Route component>(NotFoundPage)</Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
