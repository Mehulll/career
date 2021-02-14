// import React from 'react'
// import './Signup.css'
// import Form from 'react-bootstrap/Form'
// import {Link,Redirect} from 'react-router-dom'

// // import Button from 'react-bootstrap/Button'
// function Login() {

//     return (
//         <div className ="div-from ">
//             <Form>
//                 <div className="container">
//                 <hr/>
//                 <h1 className = "h1sign">Log In</h1>
//                 <label for ="username">Username</label>
//                 <input type = "text" placeholder="Enter Username" name = "username" required></input>
//                 <label for="email">Email</label>
//                 <input type="text" placeholder="Enter email" name = "email" required></input>
//                 <label for="psw">Password<b/></label>
//                 <input type = "password" placeholder="Enter Password" name = "psw" required></input>

//                 <div class="clearfix">
//                     <button type="submit" class="signupbtn">Login</button>
//                 </div>
//                     <h6>Don't have an account?<Link to ="/signup">'   'Signup Now</Link> </h6>

//                 </div>
//             </Form>
//         </div>
       
//     );
// }

// export default Login;


import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/actions.auth";

const Login = ({ login,isAuthenticated }) => {
  const [loginData, SetLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = loginData;

  const onChange = (e) =>
    SetLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
    login(username, email, password);
  };

  if(isAuthenticated){
      return <Redirect to='/'/>
  }

  return (
    <div className = "div-form">
      <form className = "container" onSubmit={(e) => onSubmit(e)}>
      <h1 className = "loginh1">Log In</h1>
        <hr/>
        <input 
          type="text"
          placeholder="Your username here"
          username="username"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        <br />
        <input
          type="email"
          placeholder="Your email here"
          name="email"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        <br />
        <input
          type="password"
          placeholder="Your password here"
          name="password"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        <br />
        <button className = "signupbtn" type="submit">Login</button>
         <h6>
        Dont have an account?<Link to="/signup">Create Account</Link>
      </h6>
      </form>
    </div>
  );
};

const mapDispatchtoProps = (state) => {
  return {
    isAuthenticated : state.auth.isAuthenticated,
  }
}


export default connect(mapDispatchtoProps, { login })(Login);