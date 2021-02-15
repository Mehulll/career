// import React from 'react'
// import './Signup.css'
// import Form from 'react-bootstrap/Form'

// export default function Signup() {
//     return (
//         <div className ="div-from ">
//             <Form action = "" className = "form999">
//                 <form className="container">
//                 <hr/>
//                 <h1 className = "h1sign">Sign Up</h1>

//                 <label for="username">Username</label>
//                 <input type="text" placeholder="Enter Username" name = "username" required></input>
//                 <label for="email">Email<b/></label>
//                 <input  type = "text" placeholder="Enter Email" name = "email" required></input>
//                 <label for="psw">Password<b/></label>
//                 <input type = "password" placeholder="Enter Password" name = "psw" required></input>

//                 <label for="pswrepeat">Confirm Password<b/></label>
//                 <input type = "password" placeholder="Confirm Password" name = "psw-repeat" required></input>

//                 <div class="clearfix">
//                     <button type="submit" class="signupbtn">Sign Up</button>
//                     <button type="button" class="cancelbtn">Cancel</button>
//                 </div>

//                 </form>
//             </Form>
//         </div>
//     );
// }

import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/actions.auth";
import './Signup.css';
const Signup = ({ signup }) => {
  const [signupData, SetSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = signupData;

  const onChange = (e) =>
    SetSignupData({ ...signupData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(username, email, password);
  };

  return (
    <div className = "div-form">
      <form className = "container" onSubmit={(e) => onSubmit(e)}>
      <h1 className = "h1sign">Sign Up</h1>

        <hr/>
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Your name here"
          name="username"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Your email here"
          name="email"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Your password here"
          name="password"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
         <label for="confirm password">Confirm Password</label>
        <input
          type="password"
          placeholder="Type your password again here"
          name="password"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        <button className = "signupbtn" type="submit">Sign Up</button>
        <button className = "cancelbtn" type="submit">Cancel</button>
        <h6>
        Already have an account?<Link to="/login">Login</Link>
      </h6>
      </form>
      <br />
      <br />
    </div>
  );
};

export default connect(null, { signup })(Signup);