import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingApp.css";
import LoginModal from "./LoginModal";
// import { Link, Route } from "react-router-dom";


function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://tiger365.me/js/jquery.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://tiger365.me/assets/tiger/assets/js/bootstrap.bundle.min.js";
    script2.async = true;
    document.body.appendChild(script2);
    

    return () => {
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
      
    };
  }, []);
 
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    
    <div className="landing-body">
    <div className="landing-page">   
  <div className="landing_body">
    {/* HEADER */}
    <header className="d-flex align-items-center py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <a href="https://tiger365.me">
            <img
              src="https://tiger365.me/tiger365.me/images/logo-text.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "250px" }}
            />
          </a>
        </div>
        <nav id="navbar" className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <a className="nav-link active" href="/">
              Home
              </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link login-btn"
                  href="#"
                  id="login_modal_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#LoginHome"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
 

    {/* HERO SECTION (SLIDER) */}
    <section id="hero">
      <div className="hero-container">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="img-fluid w-100"
                src="https://tiger365.me/assets/tiger/assets/img/banner1.png"
                alt="Banner 1"
              />
            </div>
            <div className="carousel-item">
              <img
                className="img-fluid w-100"
                src="https://tiger365.me/assets/tiger/assets/img/banner2.png"
                alt="Banner 2"
              />
            </div>
            <div className="carousel-item">
              <img
                className="img-fluid w-100"
                src="https://tiger365.me/assets/tiger/assets/img/banner3.png"
                alt="Banner 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>

    {/* THUMBNAILS SECTION */}
    <section className="thumbnails">
      <div className="container">
        <div className="section-title">
          <h2>Enjoy the fastest odds with live dealers</h2>
        </div>
        <div className="row">
          {[
            "cricket",
            "football",
            "tennis",
            "casino",
            "indian_casino",
            "teenpatti",
            "lucky_7",
            "32_cards",
            "aaa",
            "bac",
            "bc",
            "l7",
            "dragontiger",
            "andarbahar",
            "queen",
            "poker",
          ].map((game) => (
            <div key={game} className="col-md-4 col-6 mb-4">
              <img
                className="img-fluid"
                data-bs-toggle="modal"
                data-bs-target="#LoginHome"
                src={`https://tiger365.me/assets/tiger/assets/img/${game}.png`}
                alt={game}
              />
            </div>
          ))}
        </div>
        <div className="row">
          {/* <div className="col-md-4 p-0 pb-2"> */}
            <img
              className="img-fluid"
              src="https://tiger365.me/assets/tiger/assets/img/newgames.png"
              alt="New Games"
            />
          {/* </div> */}
        </div>
      </div>
    </section>
  </div>
  <LoginModal show={showLoginModal} onClose={handleCloseLoginModal} />
  
</div>
 {/* FOOTER */}
 <footer className="homefooter text-center p-4">
      <h3 className="fs-5">Players are requested not to contact untrusted sources.</h3>
      <h4 className="fs-6">This site is operated by Tigerexch.</h4>
      <hr />
      <ul className="list-unstyled d-flex justify-content-center">
        <li className="mx-3">
          <a href="#">Terms & Conditions</a>
        </li>
        <li className="mx-3">
          <a href="#">About Us</a>
        </li>
        <li className="mx-3">
          <a href="#">Responsible Gaming</a>
        </li>
        <li className="mx-3">
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
    </footer>
</div>
  );
 
}

export default App;
