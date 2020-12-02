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

    <form class="signinForm form-hidden" id="createAccount">
            <h1 class="form-title">Create Account</h1>
            <p>Username</p>
            <input type="text" name="" placeholder="Enter Username" />
            <p>Password</p>
            <input type="text" name="" placeholder="Enger Password" />
            <p>Email</p>
            <input type="text" name="" placeholder="Email" />
            <br />
            <input type="submit" name="" value="Sign Up" />
            <p class="message">
                <a href="#" id="linkLogin"> Already have an account? Sign In</a> 
            </p>
          </form>
      </div>
      <script src="./toggleForm.js"></script>
    </body>
} 

