import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import banjir from "../assets/img/logo-banjir.png";
import gempa from "../assets/img/logo-gempa.png";
import longsor from "../assets/img/logo-longsor.png";

const EdukasiPages = () => {
  useEffect(() => {
    scroll.scrollToTop({
      duration: 0,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <section className="bencana-category">
          <div
            className="bencana-list"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "10px",
              margin: "20px 0px",
              padding: "20px",
              justifyContent: "center",
            }}
          >
            <div className="bencana-item">
              <Link
                to="#"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={banjir} className="logo-bencana" alt="banjir" />
                <h2>Banjir</h2>
              </Link>
            </div>
            <div className="bencana-item">
              <Link
                to="#"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={longsor} className="logo-bencana" alt="longsor" />
                <h2>Longsor</h2>
              </Link>
            </div>
            <div className="bencana-item">
              <Link
                to="#"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={gempa} className="logo-bencana" alt="gempa" />
                <h2>Gempa</h2>
              </Link>
            </div>
          </div>
        </section>

        <section
          className="penjelasan"
          style={{
            margin: "40px",
            padding: "20px",
            fontSize: "25px",
            backgroundColor: "#ff8b43",
          }}
        >
          <div className="container">
            <div
              className="card border-0"
              style={{ backgroundColor: "#ff8b43", fontWeight: "bold" }}
            >
              <div className="card-body">
                Edukasi kesiapsiagaan bencana merupakan suatu fitur yang
                berfungsi untuk memberikan informasi tentang tata cara dalam
                menghadapi bencana baik dari tahap pra-bencana , bencana, dan
                pasca bencana melalui audio visual dan teks.
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EdukasiPages;
