import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {Link} from 'react-router-dom';
import './Navbar.css'


function NavbarNew() {
    return (
   
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Career</Navbar.Brand>
      <Nav className="mr-auto">
          <Link className = "link1" to = "/">Home</Link>
          <Link className = "link2" to = "/list">List</Link>
          <Link className = "link3" to = "/about">About</Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    )
};

export default NavbarNew;