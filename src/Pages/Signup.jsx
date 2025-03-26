
import logo from '../assets/Images/logo.png';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const navigate = useNavigate();
  return (
    
    <div className="container">
      

      <div className="signup-container">
      <div className="signup-card">
        {/* Logo & Title */}
        <div className="logo-containers">
        <h6 className="Signup-text">Sign up</h6>
          <img src={logo} alt="Logo" className="small-logo" />
        </div>
        
        <h2 className="titles">Create an account</h2>

        <form>
          {/* Email Field */}
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" className="input-field" />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input type={showPassword ? "text" : "password"} placeholder="Enter password" className="input-field" />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="input-field"
              />
              <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          {/* Register Button */}
          
          <button className="register-btn" onClick={() => navigate("/SignIn")}>Register</button>
        </form>

          <p className="signup-text">
           {" Already have an account?"} <a href="/SignIn" className="signup-link">Sign in</a>
          </p>
          </div>
          
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

export default SignUp;

