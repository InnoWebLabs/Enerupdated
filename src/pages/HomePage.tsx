import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import BMSSection from '../components/BMSSection';
import CertificationsSection from '../components/CertificationsSection';
import LogoCarousel from '../components/LogoCarousel';

export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Enerquest Solutions - Home';
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection homepage />
      <LogoCarousel />
  <ProjectsSection homepage />
      <BMSSection />
      <CertificationsSection homepage />
      {/* GalleryPage removed from homepage */}
      {/* Request a Quote Section */}
      <section className="py-14 bg-gradient-to-r from-[#1e357a] via-[#2959CA] to-[#6ea8ff] text-white">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-300" />
                <span className="text-xs tracking-wide uppercase opacity-90">Fast response within 24 hours</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Request a Quote</h2>
              <p className="text-base md:text-lg opacity-90 font-light max-w-xl">
                Tell us about your project requirements and our engineers will provide a tailored estimate for electrical contracting, BMS, or turnkey solutions.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/90 text-sm">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-300" /> Transparent pricing</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-300" /> Expert guidance</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-300" /> Flexible engagement</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-300" /> No obligation</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full md:w-auto">
              <button
                onClick={() => navigate('/contact')}
                className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl flex items-center gap-2 w-full sm:w-auto"
                aria-label="Request a Quote"
              >
                <i className="fas fa-file-signature" />
                Request a Quote
                <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
