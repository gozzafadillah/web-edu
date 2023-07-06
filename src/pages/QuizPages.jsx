import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const QuizPages = () => {
  useEffect(() => {
    scroll.scrollToTop({
      duration: 0,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <section className="quiz">
        <div className="container quiz-container">
          <div className="title-quiz">
            <h1>Quiz</h1>
            <p>
              Penilaian pemahaman anda setelah mempelajari dalam web education
              ini. Jika anda belum paham silahkan membaca kembali materinya
            </p>
            <Link
              className="btn"
              to="/edukasi"
              style={{ backgroundColor: "#ff8b43", color: "#fff" }}
            >
              Baca Kembali
            </Link>
          </div>
          <div className="iframe-content">
            <iframe
              src="https://forms.gle/TASF78mM4Q9QxjvKA"
              title="form-quiz"
              frameborder="0"
              style={{ width: "42vw", height: "80vh" }}
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default QuizPages;
