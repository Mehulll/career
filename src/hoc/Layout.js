import React from 'react';
import  Navs from '../components/Navbar'
import Navs2 from '../components/NavbarNew'
import { connect } from 'react-redux';

const Layout = ({isAuthenticated}) => {

    const loggedinNow = (
    <>
        <Navs2/>
    </>
  )

  const notLoggedin = (
    <>
        <Navs/>
    </>
  )

    return (
        <div>
     <div>{isAuthenticated ? loggedinNow:  notLoggedin}</div>
        </div>
    )
}

const mapDispatchtoProps = (state) => {
  return {
    isAuthenticated : state.auth.isAuthenticated
  }
}


export default connect(mapDispatchtoProps)(Layout);