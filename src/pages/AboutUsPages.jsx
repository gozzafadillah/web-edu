import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutUs from "../assets/img/about-us.png";
import logo from "../assets/img/logo.png";

const AboutUsPages = () => {
  return (
    <div>
      <Navbar />
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
            Website ini merupakan website yang di kembangkan oleh ...... Website
            ini memiliki fitur yang berfungsi untuk memberikan edukasi
            kesiapsiagaan bencana dan informasi bencana.
          </div>
        </div>
        <section className="about-list">
          <img width="250vw" src={logo} alt="logo-ppni" />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPages;
