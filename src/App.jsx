import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/Signin";
import SignUp from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import FreedomWall from "./Pages/FreedomWall"; // Fixed import path
import Meditation from "./Pages/Meditation";
import Challenges from "./Pages/Challenges";
import Landing from "./Pages/Landing"; // Ensure this component exists
import WellnessBlog from "./Pages/WellnessBlog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />  {/* Fixed undefined component */}
        <Route path="/SignIn" element={<SignIn />} />  {/* Removed duplicate */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Home" element={<Home />} />  {/* Moved Home to correct path */}
        <Route path="/FreedomWall" element={<FreedomWall />} /> {/* Fixed undefined component */}
        <Route path="/Meditation" element={<Meditation />} />
        <Route path="/WellnessBlog" element={<WellnessBlog />} />
        <Route path="/Challenges" element={<Challenges />} />
        <Route path="/Profile" element={<Profile />} /> {/* Fixed extra space */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
