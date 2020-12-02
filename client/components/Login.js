import React, { Component } from "react"

export default class Login extends Component {
    render () {
        return (
         <form className="loginForm" id="login">
          <h1>Login</h1> 
          <p>Username</p>
            <label>Email address</label>
            <input type="text" name="" placeholder="Enter Username" />
          
            <p>Password</p>
            <label>Password</label>
            <input type="text" name="" placeholder="Enter Password" />
           
            <input type="submit" name="" value="login" /><br />
            <p class="message">
                <a href="#" id="linkCreateAccount"> Don't have an account? Sign Up</a>
              </p>
            <br />
          </form> 
        )
    }
} 
