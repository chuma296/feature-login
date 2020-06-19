import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Login.css';
const Login = () => {
	return (
	
  <div>
     
      <div className="container">
        <h2>Sign In</h2>

        <div className="ism-form__group">
          <label for="ism-username">Email Address</label>
            
            <div className="ism-input-holder">
              <input type="email" name="login" id="ism-email" placeholder="Email Address" />
            </div>
        </div>

      <div className="ism-form__group">
        <label for="ism-password">Password</label>
        
        <div className="ism-input-holder">
          <input type="password" name="password" id="ism-password"
          placeholder="Password" data-password-element="input"/>
        </div>
      </div>

       <div className="ism-form__group">
            <a
               href="/accounts/password-reset/"      
               class="forget"         
               >Forgot login details?
            </a>
             

           <button type="submit">
             Sign in
           </button>
        </div>

      </div>

  </div>

  
  )

  }

  export default Login;
