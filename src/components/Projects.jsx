import React, { forwardRef } from "react";
import FlowingMenu from "./FlowingMenu";
import "../styles/Projects.css";
import image1 from "../assets/WeddingFilms.png";
import image2 from "../assets/WeddingTrailers.png";
import image3 from "../assets/KurstonClaytonWeddingTrailer.png";

const demoItems = [
  {
    link: "/project-1",
    text: "Clayton & Kurston | A Covenant Before Christ",
    image: image1,
  },
  {
    link: "/project-2",
    text: "Marilize & Casparus Wedding Trailer - Dullstroom",
    image: image2,
  },
  {
    link: "/project-3",
    text: "Kurston & Clayton - Wedding Trailer",
    image: image3,
  },
];

const Projects = forwardRef((props, ref) => {
  return (
    <section id="projects" className="projects-overlay" ref={ref}>
      <div className="projects-header">
        <h1 className="page-title">Projects</h1>
      </div>
      <div className="projects-flowing-menu">
        <FlowingMenu items={demoItems} />
      </div>
    </section>
  );
});

export default Projects;
