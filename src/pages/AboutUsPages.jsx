import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutUs from "../assets/img/about-us.png";
import logo from "../assets/img/logo.png";

const AboutUsPages = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ fontWeight: "bold" }}>About Us</h1>

        <div
          className="container my-5"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap-reverse",
            gap: "25vw",
            alignItems: "center",
          }}
        >
          <div className="sider about">
            <img src={aboutUs} alt="contact-us" className="img-contact-us" />
            <div className="about-body my-3">
              Website ini merupakan website yang di kembangkan oleh Febby
              Padhilah Nuraini NIM 219011 Website ini memiliki fitur yang
              berfungsi untuk memberikan edukasi kesiapsiagaan bencana dan
              informasi bencana.
            </div>
            <div
              className="media-social text-center my-3"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <a
                href="https://www.instagram.com/febbypadhilahn/"
                style={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.5rem",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <i
                  class="fa-brands fa-instagram"
                  style={{ fontSize: "2.5rem", color: "brown" }}
                ></i>{" "}
                @Febbypadhilahn
              </a>
              <a
                href="https://www.instagram.com/stikep_ppnijabar/"
                style={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.5rem",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <i
                  class="fa-brands fa-instagram"
                  style={{ fontSize: "2.5rem", color: "brown" }}
                ></i>{" "}
                @stikep_ppnijabar
              </a>
            </div>
          </div>
          <section className="about-list">
            <img width="350vw" src={logo} alt="logo-ppni-about" />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPages;
