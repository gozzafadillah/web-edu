import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import banjir from "../assets/content/banjir";
import gempa from "../assets/content/gempa";
import longsor from "../assets/content/longsor";

const DetailEdukasiPages = () => {
  const navigate = useNavigate();

  const backButton = () => {
    navigate(-1);
  };
  let { name } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    switch (name) {
      case "banjir":
        setData(banjir);
        break;
      case "gempa":
        setData(gempa);
        break;
      case "longsor":
        setData(longsor);
        break;
      default:
        setData({
          name: "title kosong",
          video: "video kosong",
          content: "content kosong",
        });
    }
  }, [name]);

  console.log("https://youtu.be/" + data?.video);
  return (
    <div>
      <Navbar />
      <div className="container my-3">
        <button onClick={() => backButton()} className="btn btn-primary">
          Back
        </button>
      </div>
      <section className="content-education">
        <div className="container">
          <div className="content-left">
            <div className="title-content">{data?.title}</div>
            <div className="video-content">
              <iframe
                src={"https://www.youtube.com/embed/" + data?.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="content-right">
            <div
              className="content-body"
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DetailEdukasiPages;
