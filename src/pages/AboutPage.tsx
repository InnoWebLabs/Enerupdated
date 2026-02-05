import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TestimonialCarousel from "../components/TestimonialCarousel";
import panelBrochure from "../public/Enerquest_Panel_Brochure.pdf";
import solutionsBrochure from "../public/Enerquest_Solutions__Brochure.pdf";

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Start visible to prevent mobile issues

  useEffect(() => {
    document.title = "About Us - Enerquest Solutions";
    
    // Set visible immediately for mobile to prevent content being hidden
    setIsVisible(true);
    
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01 } // Lower threshold for better mobile detection
    );
    const node = ref.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const focusItems = [
    "CAD Systems",
    "Latest technology & quality service at affordable price",
    "Safe workplace for employees & visitors",
    "Client satisfaction as our driving force",
    "Automated cost accounting systems",
    "Project management systems to track schedule & delivery",
    "Close requirement analysis to propose cost-effective solutions",
    "Safety-first approach while delivering quality services",
    "Strong client relationships for ongoing support",
  ];

  const commodities = [
    "HT & LT Distribution Solutions / Panels",
    "Indoor & Outdoor Lighting Solutions",
    "Earthing & Lightning Protection",
    "Liasioning & Breakdown Services",
    "Electrical Fabrication Works",
    "Access Control, CCTV, Fire Alarm & PA Systems",
    "Fire Extinguisher Systems, WLD & RR Systems",
    "Gas Suppression Systems",
    "Network, Audio & Video Solutions",
  ];

  const servicesIntro =
    "Enerquest Solutions Private Limited is a Government of Karnataka licensed Class 1 electrical contractor based in Bengaluru. We deliver end-to-end turnkey electrical services — from substations (up to 11kv/33kv) and switchgear to building automation, testing, commissioning and maintenance — for industrial, commercial and retail sectors.";

  return (
    <section
      id="about"
      // increased top padding so content stays below sticky navbar on all screens
      className="pt-24 sm:pt-28 lg:pt-32 scroll-mt-28 pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {/* Hero card - removed negative margins so it stays below navbar */}
          <div className="mx-auto w-full max-w-5xl mt-6 sm:mt-8 lg:mt-12 mb-8">
            <div className="relative z-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                About Us
              </h2>

              <div className="mx-auto mt-4 sm:mt-6 max-w-3xl">
                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                  {servicesIntro}
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg shadow hover:bg-blue-700 transition"
                  aria-label="Get a Quote"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/projects"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-800 px-4 py-2.5 rounded-lg hover:bg-slate-50 transition"
                  aria-label="View Projects"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            {[
              { n: "500+", t: "Projects" },
              { n: "15+", t: "Years experience" },
              { n: "11kv/33kv", t: "Substation capacity" },
              { n: "24/7", t: "Support" },
            ].map((s) => (
              <div
                key={s.t}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 sm:p-6 text-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                  {s.n}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1">
                  {s.t}
                </div>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Left: Overview */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3 text-center">
                Who we are
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Enerquest Solutions Private Limited is a professionally managed,
                Class 1 electrical contractor licensed by the Government of
                Karnataka. We specialize in design, supply, installation,
                testing and commissioning of electrical systems for industrial
                and commercial projects. Our portfolio includes large and
                complex engineering contracts executed with leading consultants
                and clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="text-base font-medium text-slate-800 mb-2">
                    End-to-end Turnkey
                  </h4>
                  <p className="text-sm text-slate-600">
                    From substations and switchgear to underground cabling and
                    building automation — a single partner for all electrical
                    needs.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="text-base font-medium text-slate-800 mb-2">
                    Quality & Safety
                  </h4>
                  <p className="text-sm text-slate-600">
                    We deliver on time, within budget, while maintaining strict
                    safety and quality standards (ISO 9001:2015).
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg shadow hover:bg-blue-700 transition w-full sm:w-auto sm:min-w-[200px]"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-6 py-2.5 rounded-lg hover:bg-blue-50 transition w-full sm:w-auto sm:min-w-[200px]"
                >
                  View Projects
                </Link>
                <a
                  href={solutionsBrochure}
                  download="Enerquest_Solutions_Brochure.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-lg shadow hover:from-green-600 hover:to-green-700 transition w-full sm:w-auto sm:min-w-[200px]"
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  Download Brochure
                </a>
              </div>
            </div>

            {/* Right: Vision & Mission */}
            <aside className="space-y-4">
              <div className="bg-gradient-to-br from-white to-blue-50 p-4 sm:p-6 rounded-2xl shadow-lg border border-blue-50">
                <h4 className="text-base font-semibold text-slate-800 mb-1">
                  Our Vision
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To be the most trusted electrical partner — delivering
                  integrity, accountability and efficient solutions that are
                  right for the client.
                </p>
              </div>

              <div className="bg-blue-600 p-4 sm:p-6 rounded-2xl shadow-lg text-white">
                <h4 className="text-base font-semibold mb-1">Our Mission</h4>
                <p className="text-sm leading-relaxed opacity-95">
                  Deliver safe, reliable and cost-effective electrical designs
                  and services through continuous improvement, quality
                  management and engaged teams.
                </p>
              </div>

              {/* Panel Brochure Download */}
              <a
                href={panelBrochure}
                download="Enerquest_Panel_Brochure.pdf"
                className="block bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl shadow-lg text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold">Panel Brochure</h4>
                    <p className="text-xs opacity-90">Download PDF</p>
                  </div>
                </div>
              </a>
            </aside>
          </div>

          {/* Work Samples */}
          <div className="mb-12 bg-white rounded-2xl shadow-lg p-5 sm:p-8">
            {/* Mobile: Title centered, Desktop: Title left + Video right */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 mb-6">
              {/* Title */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-800 whitespace-nowrap mb-6">
                  Work Samples
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-blue-600 font-medium text-center px-4">
                  ▶ Click on the videos to view our work
                </p>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
              
              {/* Featured Video - only visible on desktop */}
              <div className="hidden lg:block flex-1 max-w-lg ml-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/JfWFaEl5ozA"
                      title="Featured Work Sample"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Videos - Featured video included on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-7xl mx-auto" style={{ transform: "scale(1.05)" }}>
              {[
                "JfWFaEl5ozA", // Featured video also shows on mobile
                "PpGgD6xgXOc",
                "hXOW3Rxltyc",
                "1G8WkbcNEgU",
                "--JpBJ3xLqM",
                "8YMo3d4yRck",
                "VOxdtjCELyo",
                "BQDMyQyHDpo",
                "tlQlAqkXIrI",
                "BgSyaSHf2KA",
                "qOA4PQu52u8",
                "fsIWD7r4uHY",
                "mFqh1P4ORqw",
              ].map((videoId, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                    idx === 0 ? 'lg:hidden' : '' // Hide first video on desktop (it shows as featured)
                  }`}
                >
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`Work Sample ${idx + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Focus, Strength & Capabilities */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center">
              Our Focus, Strength & Capabilities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-slate-700">
              {focusItems.map((item, idx) => (
                <li
                  key={idx}
                  className="group transform transition duration-300 hover:-translate-y-1 hover:scale-[1.02] bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-lg"
                >
                  <div className="flex gap-3 items-start">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-semibold transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      ✓
                    </span>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Commodities */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center">
              Commodities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {commodities.map((c, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl p-4 sm:p-5 shadow transition transform duration-300 hover:-translate-y-1 hover:shadow-2xl flex items-start gap-3"
                >
                  <div className="text-blue-600 text-2xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-3">
                    ⚡
                  </div>
                  <div className="text-sm text-slate-700">{c}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <TestimonialCarousel />

          {/* We Provide */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 text-center">
              We Provide
            </h3>
            <div className="max-w-4xl mx-auto text-slate-700 leading-relaxed space-y-3 text-sm sm:text-base">
              <p>
                Enerquest regards quality as its lifeline and customer demand as
                its motivation. We combine technical development, quality
                assurance and environmental adaptation to deliver reliable,
                high-quality electrical solutions.
              </p>
              <p>
                Our experienced teams handle design, supply, installation,
                testing and commissioning — ensuring projects are completed to
                the highest standards on time and within budget.
              </p>
              <p>
                Every job is quality inspected for peace of mind. We
                continuously evaluate emerging techniques and systems to offer
                the best and most reliable options for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
