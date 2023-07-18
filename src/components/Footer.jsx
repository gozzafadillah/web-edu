import React, { useState, useEffect } from "react";

const Footer = () => {
  const dummyNews = [
    {
      id: 1,
      title: "Mitigasi Bencana, Prioritas BPBD Kab. Bandung Barat",
      link: "https://bandungberita.com/mitigasi-bencana-prioritas-bpbd-kab-bandung-barat/",
      website: "Bandung Berita",
    },
    {
      id: 2,
      title:
        "Ajarkan Mitigasi Kebencanaan kepada Generasi Muda, BMKG Bandung Gelar Kegiatan BMKG Goes To School",
      link: "https://www.bmkg.go.id/berita/?p=ajarkan-mitigasi-kebencanaan-kepada-generasi-muda-bmkg-bandung-gelar-kegiatan-bmkg-goes-to-school&lang=ID",
      website: "BMKG",
    },
    {
      id: 3,
      title:
        "Bencana Alam yang Serang Kabupaten Bandung Bukan Cuma Tanah Longsor, Tapi Juga Banjir",
      link: "https://jabar.tribunnews.com/2023/04/27/bencana-alam-yang-serang-kabupaten-bandung-bukan-cuma-tanah-longsor-tapi-juga-banjir",
      website: "Jabar Tribun",
    },
  ];

  const [breakingNews, setBreakingNews] = useState(dummyNews);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentNews, setCurrentNews] = useState(
    breakingNews[currentNewsIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) =>
        prevIndex === breakingNews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [breakingNews.length]);

  useEffect(() => {
    setCurrentNews(breakingNews[currentNewsIndex]);

    // Delay the transition to the next news
    const timeout = setTimeout(() => {
      setCurrentNewsIndex((prevIndex) =>
        prevIndex === breakingNews.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentNewsIndex, breakingNews]);
  return (
    <footer
      style={{ backgroundColor: "#e28743", padding: "40px" }}
      className="footer"
    >
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          padding: "10px 50px",
        }}
        className="breaking-news"
      >
        <h3>Breaking News</h3>
        {currentNews && (
          <span>
            {currentNews.title} -
            <a href={currentNews.link}>{currentNews.website}</a>
          </span>
        )}
      </div>
    </footer>
  );
};

export default Footer;
