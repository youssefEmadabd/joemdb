import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import Auth from "../utils/Auth"
class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.onchangeHandler = this.onchangeHandler.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email:"",
            password:"",
            name:"",
        }
    }
    signup(e){
        e.preventDefault();
        Auth.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
        }).catch((error)=>{
            console.log(error);
        });
    }

render(){

return(<div className="container">
    <input id="name" type="name" placeholder="name"onChange={e=>{
                  this.setState({name:e.target.value})
              }}/>
              <input id="txtemail" type="email" placeholder="Email" onChange={e=>{
                  this.setState({email:e.target.value})
              }}/>
              <input id="txtpassword" type="password" placeholder="Password"onChange={e=>{
                  this.setState({password:e.target.value})
              }}/>
              <button id="signup" onClick={this.signup}>Signup</button>
              
               </div>
);}}
export default Signup;