import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../assets/img/contact-us.png";

const ContactPages = () => {
  return (
    <div>
      <Navbar />
      <div
        className="container my-5"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div className="sider">
          <img src={ContactUs} alt="contact-us" className="img-contact-us" />
        </div>
        <section className="contact-list">
          <div className="contact-title">
            <h1>Emergency Contact</h1>
          </div>
          <div className="contact-body">
            Jika ingin bekerja sama dengan kami, dapat menghubungi nomor dibawah
            ini :
            <p style={{ fontWeight: "bold" }}>
              Siaga P3K dan Layanan Bencana: 022-4213858
            </p>
            <p style={{ fontWeight: "bold" }}>
              Damkar Kota Bandung : 022-113 / 022-7207113
            </p>
            <p style={{ fontWeight: "bold" }}>Ambulans : 022-118</p>
            <p style={{ fontWeight: "bold" }}>
              Instalasi Gawat Darurat 022-2551198, 2551191
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPages;
