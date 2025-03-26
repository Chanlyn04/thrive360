import { Image } from "react-bootstrap";
import logo from "../assets/Images/logo.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Login Form & Hero Image */}
      <div className="Login-form">
        {/* Login Form */}
        <div className="login-card">
          <div className="logo-container">
            <Image src={logo} alt="Logo" className="form-logo" />
          </div>
          <h1 className="title">Thrive360</h1>
          <h2 className="subtitle">Sign in</h2>

          <form className="form">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" className="input" />

            <label>Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="input"
              />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <a href="/ForgotPassword " className="forgot-password">
              Forgot Password?
            </a>

            <button className="sign-in-btn" onClick={() => navigate("/Profile")}>
              Sign in
            </button>
          </form>

          <p className="signup-text">
            {" Don't have an account?"}{" "}
            <a href="/SignUp" className="signup-link">
              Sign up
            </a>
          </p>
        </div>
        

        {/* Hero Image Section */}
        <div className="text-centers">
          <div className="circle-borders"></div>
          <div className="circle-backg"></div>
          <img
            src="https://www.groupiso.com/wp-content/uploads/2023/02/woman-laughing-on-phone.png"
            className="img-hero"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;