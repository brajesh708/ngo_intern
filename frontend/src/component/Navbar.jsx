// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo2.jpg';




// const Navbar = () => {
//     return (
//         <>

//             <nav className="navbar">
//                 <ul className="nav-links">
//                     {/* <div className="menu-icon">☰</div> */}
//                     <div className="brand-logo">
//                         <img src={logo} alt="Brand Logo" />
//                     </div>
//                     <li>
//                         <Link to="about">Who we are</Link>

//                     </li>
//                     <li>
//                         <Link to="about1">Where we work</Link>

//                     </li>
//                     <li>
//                         <Link to="about2">What we do </Link>

//                     </li>
//                 </ul>
//             </nav>
//         </>

//     );
// };

// export default Navbar;
//====================================================
import React from 'react';
import image from '../assets/images/div.jpg';
import image1 from '../assets/images/map.jpg';
import image2 from '../assets/images/cartoon.jpg';
import image3 from '../assets/images/books.jpg';
import image4 from '../assets/images/timeline.jpg';



const Navbar = () => {
  return (
    <>
      <div className="App">
        {/* Header Section */}
        <header className="header">
          <div className="logo">
            <h1>NGO</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="/about1">Who we are</a></li>
              <li><a href="/about2">What we work </a></li>
              <li><a href="/about3">What we do</a></li>
             <li> <button className="donate-btn">Donation</button></li>
            </ul>
          </nav>
        </header>

        {/* Main Section */}
        <div>
          <div className="main-banner">
            <div className="banner-content">
              <h2>Donate To Make A Difference</h2>
              <p>Hundreds of thousands of children experiencing or witnessing gender-based violence.</p>
              {/* <button className="get-involved-btn">Get Involved</button> */}
            </div>
          </div>

          <div className="cards">
            <div className="cards-container">
              <div className="card">
                {/* <img className="image" src='https://www.dailypioneer.com/uploads/2017/story/images/big/191286_1.jpg'/> */}

                <h3>Send Donation</h3>
                <p>Hundreds of thousands of children experiencing</p>
                <button>Read More</button>
              </div>

              <div className="card">
                <h3>Become Member</h3>
                <p>Hundreds of thousands of children experiencing</p>
                <button>Read More</button>
              </div>
              <div className="card">
                <h3>Send Donation</h3>
                <p>Hundreds of thousands of children experiencing</p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <section className="share-section">
        <div className="share-content">
          <div className="share-image">
            <img src={image} alt="Child in need" />
          </div>
          <div className="share-text">
            <h2>Give your share</h2>
            <h1><strong>to show you care!</strong></h1>
            <p>
              Improving the lives of others by any means. From design, solutions, and
              support, everything we do aims to help those who have limited resources.
              Duo cu case admodum facilisis, deterruisset concludaturque ne eam. Cum
              populo prodesset disputationi cu. Rationibus deseruisse id vix, vel ex ferri
              populo. Et qui ludus detraxit phaedrum, ne gubergren pertinacia omittantur.
            </p>
            <button className="donate-button">Donate Now</button>
          </div>
        </div>
      </section>



      <div className="impact-container">
        <div className="impact-content">
          <h1>Your support has helped us Double our impact</h1>
          <div className="impact-info">
            <div className="info-block">
              <img style={{ width: "200px" }} src={image1} alt="People working in the field" />
              <h2>13</h2>
              <p>States Across India</p>
            </div>
            <div className="info-block">
              <img style={{ width: "200px" }} src={image2} alt="People working in the field" />
              <h2>99</h2>
              <p>Schools and Learning Centres</p>
            </div>
            <div className="info-block">
              <img style={{ width: "200px" }} src={image3} alt="People working in the field" />
              <h2>2,00,233</h2>
              <p>Students in School</p>
              <p className="footnote">*Number of beneficiaries end of FY 2023-24</p>
            </div>
          </div>
          <button className="donate-button">Donate</button>
        </div>
      </div>




      <section className="timeline-section">
        <div className="timeline-header">
          <h1>PRIYA THROUGH THE YEARS</h1>
          <div className="timeline-years">
            <span>2024</span>
            <span>2023</span>
            <span>2022</span>
            <span>2021</span>
            <span>2020</span>
            <span>2019</span>
            <span>2018</span>
            <span>2017</span>
          </div>
        </div>

        <div className="content-section">
          <div className="content-text">
            <h2>ADAPTING IN AN UNPRECEDENTED YEAR</h2>
            <p>
              In a year of unprecedented change and disruption caused by the Covid-19
              pandemic, the inequity and burden on workers, especially at the base of the
              pyramid, were laid bare. As our NGO adapted operations and programming
              to ensure staff and beneficiary safety and access to prevention information
              and resources, the year also helped shape the final iterations of the 2021-2025
              strategic plan: Reclaiming Sustainability.
            </p>
          </div>
          <div className="content-image">
            <img style={{ width: "500px", height: "300px" }} src={image4} alt="People working in the field" />
          </div>
        </div>
      </section>

      {/* footer part */}

    <footer className="footer">
      <div className="footer-newsletter">
        <h2>SUBSCRIBE TO OUR NGO</h2>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="email-input"
          />
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </form>
      </div>
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>ARCHIACT</h3>
          <address>
            Archiact VR, 410-555 W Hastings St,<br />
            Vancouver, BC V6B, Canada
          </address>
          <a href="mailto:admin@archiactvr.com">admin@archiactvr.com</a>
        </div>
        <div className="footer-section links">
          <h3>ARCHIACT</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section services">
          <h3>SERVICES</h3>
          <ul>
            <li><a href="/games">Games</a></li>
            <li><a href="/publishing">Publishing</a></li>
            <li><a href="/solutions">Solutions</a></li>
          </ul>
        </div>
        <div className="footer-section events">
          <h3>EVENTS</h3>
          <ul>
            <li><a href="/cvr">CVR</a></li>
            <li><a href="/gamejams">Game Jams</a></li>
          </ul>
        </div>
        <div className="footer-section follow">
          <h3>FOLLOW</h3>
          <div className="social-icons">
            <a href="https://twitter.com" className="icon twitter">Twitter</a>
            <a href="https://facebook.com" className="icon facebook">Facebook</a>
            <a href="https://youtube.com" className="icon youtube">YouTube</a>
            <a href="https://play.google.com" className="icon google">Google</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a> | <a href="/sitemap">Sitemap</a>
        <p>Copyright 2016 © Archiact Interactive | Website by Edge of the Web</p>
      </div>
    </footer>
  
    </>
  );
};

export default Navbar;


