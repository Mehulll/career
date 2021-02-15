import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/actions.auth';
import {Navbar,Nav} from 'react-bootstrap'

const Navs2 = ({logout}) => {
  return(
    <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Career</Navbar.Brand>
      <Nav className="mr-auto">
          <Link className = "link1" to = "/">Home</Link>
          <Link className = "link2" to = "/list">List</Link>
          <Link className = "link3" to = "/about">About</Link>
          <Link className = "link4" to = "/" onClick= {logout}>Logout</Link>
      </Nav>
      </Navbar>
    </div>
  )
}


export default connect(null,{logout})(Navs2)