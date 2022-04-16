import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const FooterOne = () => {
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
    <div className="template-footer-one pt-100 with-top-border">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              {logo && (
                <Link href="/">
                  <a className="logo">
                    <img
                      src={logo.data.attributes.blackLogo.data.attributes.url}
                      alt={
                        logo.data.attributes.blackLogo.data.attributes
                          .alternativeText
                      }
                    />
                  </a>
                </Link>
              )}
              <p>
                Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua minim.
              </p>
              <span className="location">
                <i className="bx bx-map"></i>
                2750 Quadra Street Victoria, Canada.
              </span>
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
                  <Link href="/services/services">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/portfolio-1">
                    <a>Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/features">
                    <a>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href="/team">
                    <a>Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/property">
                    <a>Property</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs/blog-grid">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials">
                    <a>Testimonials</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h3>Contact with us</h3>
              <ul className="box">
                <li className="d-flex align-items-center">
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:hello@aveb.com">hello@aveb.com</a>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:+1-485-456-0102">+1-485-456-0102</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <p>
                Copyright © {currentYear} Aveb. All Rights Reserved by{" "}
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

export default FooterOne;
