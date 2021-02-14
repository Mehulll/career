import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import './Navbar.css' 
import { connect } from 'react-redux'

var re = []
var ok = false;
var why;
class Navs extends Component{
    constructor(props){
      super(props);
         this.state = {
            search : '',
            results:[]
          } 
    }
  // componentDidMount = () => {
  //   this.getData();
  // };  logout = () => {

  

  hangleGet = (event) => {
    const target = event.target;
    const search = target.name;
    const value = target.value;

    this.setState({
      [search] : value
    });
  };

  // componentDidMount = () => {
  //   this.getData();
  // };

  getData = (event) => {
    event.preventDefault();
    this.state.results=[]
    // console.log(payload);
    axios.get('/api/UserModel/search?name=' + this.state.search  )
      .then((response) => {
        const data = response.data;
        this.setState({results:data});
        console.log("data has been recieved")
        // this.props.why=this.state.results;
        // re = this.state.results;
        // this.props.history.push('/results',this.state.results)
      })
      .catch(() => {
        alert("Data not received")
      });
    // this.props.why=this.state.results
    // console.log(this.props.why)
  }

  // displayresults = (res) => {
  //   if (!res.length) return null
  //   // console.log(this.state.results)
  //   return res.map((result,index) => (
  //     <div key={index}>
  //       <p>
  //         {result.Name}
  //       </p>
  //     </div>
  //   ));
  // };

  putValue = (props) => {
    
    if(props.length > 0){
      for(var i = 0 ; i < props.length ; i++){
        re.push(props[i].Name);
      }
      props=[]
    }
    why = this.state.search;
    // return null;
  }
 
  reclear = () =>{
    re = []
  }
  render(){
    // console.log(this.state);
    return(
    <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Career</Navbar.Brand>
      <Nav className="mr-auto">
          <Link className = "link1" to = "/">Home</Link>
          <Link className = "link2" to = "/list">List</Link>
          <Link className = "link3" to = "/about">About</Link>
          <Link className = "link4" to = "/signup">Signup</Link>
          <Link className = "link5" to = "/login">Login</Link>
      </Nav>
      <Form inline className = 'form1' onKeyUp={this.getData}>
        <FormControl name = "search" value = {this.state.title} onChange={this.hangleGet} type="text" placeholder="Search" className="mr-sm-2" />
        {/* <Button variant="outline-info" onChange={this.getData}>Search</Button> */}
      </Form>
      {/* {console.log(this.state.results)} */}

      {re.length===0 && this.putValue(this.state.results)}
      {/* {console.log(this.state.results)} */}
      {this.state.results.length>0 &&
        <Redirect to = {{
            pathname : '/results',
        }}/>
      }
      {/* {this.state.search='' && <Redirect to = '/'/>} */}
      {this.state.results=[]}
    </Navbar>
    </div>
    );
  };
}





export function Results(){
      return(
        <div>
          {re.map(Name => <div><li><Link to = {`/${Name}`} >{Name}</Link></li></div>)}
          {why.length == 0 && 
              <Redirect to = {{
                pathname : '/home',
              }}/>
          }
          {re=[]}
          {ok = false}
        </div>
      )
}

export default connect(null)(Navs);
// export {Navs,Results};
