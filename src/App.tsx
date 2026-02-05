import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import BMSPortfolioPage from "./pages/BMSPortfolioPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import Preloader from "./components/Preloader";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    const handleReady = () => {
      // small delay to ensure smooth fade-out
      setTimeout(() => setIsPreloading(false), 400);
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
    }

    return () => window.removeEventListener("load", handleReady);
  }, []);

  return (
    <div className="min-h-screen">
      <Preloader isVisible={isPreloading} />
      <Router>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/bms-portfolio" element={<BMSPortfolioPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
