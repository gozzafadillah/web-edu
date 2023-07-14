import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";
import ReactGA from "react-ga";

const HomePages = () => {
  function generateRandomUserId() {
    const randomId = Math.random().toString(36).substring(2, 10);
    return `user_${randomId}`;
  }
  useEffect(() => {
    ReactGA.initialize("G-01D23PJBCX");
    ReactGA.pageview(window.location.pathname + window.location.search);
    // Menggunakan ID pengunjung atau sesi yang dibuat secara acak
    const userId = generateRandomUserId();
    ReactGA.set({ userId });
  }, []);
  return (
    <div>
      <Navbar />
      <section className="jumbroton">
        <Jumbotron />
      </section>

      <section className="category-content">
        <div
          className="category-item"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <img
            src="https://res.cloudinary.com/dt91kxctr/image/upload/v1679025412/ykmbpdz9lnxnmiqpa575.png "
            alt="Peta"
            width="195px"
            height="150px"
          />
          <Link to="/peta-bencana" className="btn btn-category-content">
            Peta Digital
          </Link>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          className="category-item"
        >
          <img
            src="https://res.cloudinary.com/dt91kxctr/image/upload/v1679025527/nb7hfj5duyjmlcpq6fjq.png"
            alt="Education"
            width="195px"
            height="150px"
          />
          <Link to="/edukasi" className="btn btn-category-content">
            Education
          </Link>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          className="category-item"
        >
          <img
            src="https://res.cloudinary.com/dt91kxctr/image/upload/v1679025442/d0xypxagzu5qfkncg6dm.png"
            alt="Peta"
            width="195px"
            height="150px"
          />
          <Link to="/quiz" className="btn btn-category-content">
            Quiz
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePages;
