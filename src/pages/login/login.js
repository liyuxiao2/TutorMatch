import React from "react";
import "./login.css"
import tutorImage from "./tutorImage.jpg";
export default function login() {
  return (
    <div className="login-page">
      <div class="login-container">
        <h1>TutorMatch</h1>
        <h2>Log In</h2>

        <form>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter Email" required />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              required
            />
            <p class="password-hint">
              It must be a combination of minimum 8 letters, numbers, and
              symbols.
            </p>
          </div>

          <div class="form-footer">
            <div class="remember-me">
              <input type="checkbox" id="remember" />
              <label for="remember">Remember me</label>
            </div>
            <a href="#" class="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit" class="login-button">
            Log In
          </button>
        </form>

        <div class="social-login">
          <button class="social-button">
            
            Log in with Google
          </button>
          <button class="social-button">
            
            Log in with Apple
          </button>
        </div>

        <div class="divider"></div>

        <p class="signup-link">
          No account yet? <a href="#">Sign Up</a>
        </p>
      </div>

      <div class="image-container">
        <img src={tutorImage}/>
      </div>
    </div>
  );
}
