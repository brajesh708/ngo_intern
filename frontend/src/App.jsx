// import React from 'react';
// import './App.css';
// import logo from './assets/images/logo.jpg';

// const Hero = () => {
//   return (
//     <div className="hero-container">
//       <nav className="navbar">
//         <div className="navbar-left">
//           <div className="menu-icon">☰</div>
//           <div className="brand-logo"> 
//             <img src={logo} alt="Brand Logo" /></div>

//         </div>
//         <div className="navbar-right">
//           <a href="#who-we-are">Who we are</a>
//           <a href="#where-we-work">Where we work</a>
//           <a href="#what-we-do">What we do</a>
//           <a href="#Donation">Donation</a>
//           <a href="#contact" className="contact-btn"><span style={{color:"black"}}>Registration</span>/<span style={{color:"red"}}>Login</span></a>
//         </div>
//       </nav>

//       <div className="hero-content">
//         <h1 className="hero-title">JONY’S STORY</h1>
//         {/* <h2 className="hero-subtitle">A Miner, an Entrepreneur</h2> */}
//         <a href="#meet-jony" className="hero-button">Meet Jony</a>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// ================================================================================================






import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';


import Navbar from "./component/navbar";
import About1 from "./component/About1";
import About2 from "./component/About2";
import About3 from "./component/About3";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="about1" element={<About1 />} />
          {/* <Route index element={<About1 />} /> */}
          <Route path="about2" element={<About2 />} />
          <Route path="about3" element={<About3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;