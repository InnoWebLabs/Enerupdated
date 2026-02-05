import { useIntersectionObserver } from "./useIntersectionObserver";
import bgVideo from "../public/video/_prompt_name_electrical_202508101709_d24.mp4";

export default function HeroSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden hero-section"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Ambient blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Keep overlays minimal for a cleaner look */}
      <div className="hero-vignette" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <div
            ref={ref}
            className={`text-center text-white transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-5 animate-float text-glow">
              Enerquest Solutions
            </h1>
            <p className="text-lg md:text-2xl mb-8 opacity-95 font-light max-w-3xl mx-auto">
              Leading Electrical Contractor & Engineering Company
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12">
              <div className="flex items-center gap-3 badge-glass px-5 py-3 rounded-full">
                <i className="fas fa-certificate text-yellow-300 text-lg" />
                <span className="font-medium">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-3 badge-glass px-5 py-3 rounded-full">
                <i className="fas fa-shield-alt text-green-300 text-lg" />
                <span className="font-medium">Government Licensed</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => {
                  const aboutSection = document.getElementById("home-about");
                  if (aboutSection) {
                    const headerOffset = 80; // Adjust this value based on your header height
                    const elementPosition = aboutSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Discover Our Excellence
              </button>
              <a
                href="#projects"
                className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg"
              >
                View Projects
              </a>
            </div>

            <div className="mt-14 flex items-center justify-center">
              {/* <div className="scroll-indicator">
                <div className="scroll-dot" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
