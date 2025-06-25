import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project1Page from "./pages/Project1Page";
import Project2Page from "./pages/Project2Page";
import Project3Page from "./pages/Project3Page";
import Services1Page from "./pages/Services1Page";
import Services2Page from "./pages/Services2Page";
import Services3Page from "./pages/Services3Page";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Services />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/project-1" element={<Project1Page />} />
        <Route path="/project-2" element={<Project2Page />} />
        <Route path="/project-3" element={<Project3Page />} />

        <Route path="/services-wedding-videos" element={<Services1Page />} />
        <Route path="/services-corporate-videos" element={<Services2Page />} />
        <Route path="/services-event-videos" element={<Services3Page />} />
      </Routes>
    </div>
  );
}

export default App;
