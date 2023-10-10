import React from "react";
import PropTypes from "prop-types";
import styles from "./footer.module.css";
import logo from "../../assets/logo2.png";

const footerData = [
  {
    title: "About",
    links: [
      { text: "How it works", url: "#" },
      { text: "Featured", url: "#" },
      { text: "Partnership", url: "#" },
      { text: "Business Relation", url: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { text: "Events", url: "#" },
      { text: "Blog", url: "#" },
      { text: "Podcast", url: "#" },
      { text: "Invite a friend", url: "#" },
    ],
  },
  {
    title: "Socials",
    links: [
      { text: "Discord", url: "#" },
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <section className={styles.footer_section}>
      <div className="container">
        <footer className="py-5 mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <a
                href="/"
                className="d-flex align-items-center mb-3 link-dark text-decoration-none"
              >
                <img src={logo} alt="" />
              </a>
              <p className={styles.footer__para}>
                Our vision is to provide convenience and help increase your
                sales business
              </p>
            </div>

            {footerData.map((section, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-6">
                <h5 className="mb-3">{section.title}</h5>
                <ul className="nav flex-column">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="nav-item mb-3">
                      <a href={link.url} className="nav-link p-0 text-muted">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 lh-1 text-decoration-none text-dark"
              >
                ©2022 MORENT. All rights reserved
              </a>
            </div>
            <ul className="nav col-md-4 justify-content-md-end list-unstyled d-flex justify-content-between flex-grow-1">
              <li className="ms-md-4">
                <a className=" text-decoration-none text-dark" href="#">
                  Privacy & Policy
                </a>
              </li>
              <li className="ms-md-5">
                <a className="text-decoration-none text-dark" href="#">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
