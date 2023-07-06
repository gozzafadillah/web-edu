import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PetaBanjir from "../assets/img/resiko-banjir.png";
import PetaLongsor from "../assets/img/resiko-longsor.png";
import PetaGempa from "../assets/img/resiko-gempa.png";
import { Link } from "react-router-dom";

const PetaBencanaPages = () => {
  useEffect(() => {
    scroll.scrollToTop({
      duration: 0,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <section className="edukasi">
        <div className="container edukasi-container p-2">
          <div className="img-content py-3">
            <div
              className="img-list"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <img src={PetaBanjir} width={600} alt="..." />
              <img src={PetaLongsor} width={600} alt="..." />
              <img src={PetaGempa} width={600} alt="..." />
            </div>
          </div>
          <div className="text-content">
            <h1 style={{ fontWeight: "bold" }}>Peta Bencana Kota Bandung</h1>
            <p style={{ fontSize: "20px" }}>
              Jika teman-teman melihat peta di samping, teman-teman dapat
              mengetahui bahwa kawasan Kota Bandung yang memiliki tingkat
              kerawanan bencana tertinggi berada di Kota Bandung....
            </p>
            <Link
              style={{ backgroundColor: "#ff8b43", color: "#fff" }}
              className="btn"
              target="_blank"
              to="https://sitaruna.cityplan.id/map.html"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PetaBencanaPages;
