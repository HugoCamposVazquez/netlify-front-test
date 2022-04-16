import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const FooterTwo = () => {
  // Logo API
  const [logo, setLogo] = React.useState();
  React.useEffect(() => {
    const getLogo = async () => {
      const response = await axios.get(`${baseApiUrl}/api/logo?populate=*`);
      setLogo(response.data);
      // console.log(response.data)
    };
    getLogo();
  }, []);

  const currentYear = new Date().getFullYear();
  return (
    <div className="template-footer-two pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              {logo && (
                <Link href="/">
                  <a className="logo">
                    <img
                      src={logo.data.attributes.whiteLogo.data.attributes.url}
                      alt={
                        logo.data.attributes.whiteLogo.data.attributes
                          .alternativeText
                      }
                    />
                  </a>
                </Link>
              )}
              <p>
                Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
                incididunt.
              </p>
              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:+1-485-456-0102">+1-485-456-0102</a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:hello@aveb.com">hello@aveb.com</a>
                </li>
                <li>
                  <i className="bx bx-map"></i>
                  2750 Quadra Street Victoria, Canada.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget pl-3">
              <h3>Quick links</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/">
                    <a>IT Startup</a>
                  </Link>
                </li>
                <li>
                  <Link href="/software">
                    <a>Software</a>
                  </Link>
                </li>
                <li>
                  <Link href="/business">
                    <a>Business</a>
                  </Link>
                </li>
                <li>
                  <Link href="/app">
                    <a>App</a>
                  </Link>
                </li>
                <li>
                  <Link href="/insurance">
                    <a>Insurance</a>
                  </Link>
                </li>
                <li>
                  <Link href="/property">
                    <a>Property</a>
                  </Link>
                </li>
                <li>
                  <Link href="/big-data">
                    <a>Big Data</a>
                  </Link>
                </li>
                <li>
                  <Link href="/distance-learning">
                    <a>Distance Learning</a>
                  </Link>
                </li>
                <li>
                  <Link href="/chatbot">
                    <a>Chatbot</a>
                  </Link>
                </li>
                <li>
                  <Link href="/medical">
                    <a>Medical</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>About Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h3>Newsletter</h3>
              <div className="box">
                <p>Latest resources, sent to your inbox weekly</p>
                <form className="newsletter-form">
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="Enter your email address"
                    name="EMAIL"
                    required={true}
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="btn-style-one red-light-color"
                  >
                    Subscribe Now <i className="bx bx-chevron-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <p>
                Copyright &copy; {currentYear} Aveb. All Rights Reserved by{" "}
                <a
                  href="https://envytheme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EnvyTheme
                </a>
              </p>
            </div>
            <div className="col-lg-6 col-md-5">
              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-facebook-app-symbol"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
