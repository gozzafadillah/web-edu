import React from "react";
import logo from "../assets/img/logo.png";

const Jumbotron = () => {
  return (
    <>
      <div className="jumbotron-title">
        <h1 style={{ fontWeight: "bold", fontSize: "65px" }}>Web Edu</h1>
        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
          Website Kesiapsiagaan Bencana
        </h2>
        <p
          className="subTitle"
          style={{
            fontWeight: "bold",
            fontSize: "15px",
            width: "25vw",
            textAlign: "justify",
          }}
        >
          Melalui Website ini teman-teman akan mendapatkan informasi tentang
          Kesiapsiagaan Bencana di Kawasan Kota Bandung.
        </p>
      </div>
      <div>
        <img width="250vw" src={logo} alt="logo-ppni" />
      </div>
    </>
  );
};

export default Jumbotron;
