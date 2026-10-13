import { useState } from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect this to your newsletter API when ready.
    window.alert("Newsletter signup is not connected yet.");
  };

  return (
    <footer className="Footer">
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footeer_logo">
                <Link to="/" aria-label="Drivehaus home">
                  <img src="/images/logo.png" alt="Drivehaus" />
                </Link>
              </div>

              <p className="footer_tagline">
                Find your next car. Make your next move.
              </p>
            </div>
          </div>

          <div className="footer_section_2">
            <div className="row">
              <div className="col">
                <h4 className="footer_taital">Stay in the Loop</h4>
                <p className="footer_text">
                  Be the first to hear about new arrivals and vehicles
                  worth taking a closer look at.
                </p>

                <form className="footer_subscribe_form" onSubmit={handleSubscribe}>
                  <div className="form-group">
                    <input
                      className="update_mail"
                      type="email"
                      placeholder="Enter your email address"
                      aria-label="Email address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                    <button className="subscribe_bt" type="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>

              <div className="col">
                <h4 className="footer_taital">About Drivehaus</h4>
                <p className="lorem_text">
                  Your destination for exploring vehicles, comparing
                  options, and finding a car that fits your lifestyle
                  and budget.
                </p>
              </div>

              <div className="col">
                <h4 className="footer_taital">Explore</h4>
                <ul className="footer_links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/cars">Browse Cars</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="col">
                <h4 className="footer_taital">Buying a Car?</h4>
                <p className="lorem_text">
                  Found something you like? Get in touch to enquire
                  about a vehicle, request more information, or arrange
                  the next step.
                </p>
                <Link className="footer_cta" to="/cars">
                  Find Your Car <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="col">
                <h4 className="footer_taital">Contact Us</h4>

                <div className="location_text">
                  <span className="footer_contact_icon" aria-hidden="true">⌖</span>
                  <span className="padding_left_15">
                    Your dealership address
                  </span>
                </div>

                <div className="location_text">
                  <span className="footer_contact_icon" aria-hidden="true">☎</span>
                  <a href="tel:+27000000000">
                    <span className="padding_left_15">
                      Your phone number
                    </span>
                  </a>
                </div>

                <div className="location_text">
                  <span className="footer_contact_icon" aria-hidden="true">✉</span>
                  <a href="mailto:info@yourdomain.co.za">
                    <span className="padding_left_15">
                      Your business email
                    </span>
                  </a>
                </div>

                <div className="social_icon">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noreferrer"
                      >f</a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noreferrer"
                      >◎</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer_bottom">
            <p>
              © {new Date().getFullYear()} Drivehaus. All rights reserved.
            </p>
            <p>Find the car that's right for you.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;