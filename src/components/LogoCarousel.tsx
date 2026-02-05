import React from "react";
import { partnerLogos } from "../data/partnerLogos.ts";

const LogoCarousel = () => {
  const logos = partnerLogos;

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600">
            We proudly collaborate with global electrical and industrial
            pioneers
          </p>
        </div>

        <div className="relative marquee">
          {/* Gradient overlays for smooth fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Sliding container: duplicate tracks for seamless loop */}
          <div className="flex marquee-track gap-8 items-center">
            <div className="flex items-center gap-8 min-w-max">
              {logos.map((item, index) => (
                <div
                  key={`a-${index}`}
                  className="flex-shrink-0 w-36 h-16 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center px-4 py-2 transition-all duration-300 hover:shadow-lg"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="max-h-10 w-auto object-contain transition duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div
              className="flex items-center gap-8 min-w-max"
              aria-hidden="true"
            >
              {logos.map((item, index) => (
                <div
                  key={`b-${index}`}
                  className="flex-shrink-0 w-36 h-16 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center px-4 py-2 transition-all duration-300 hover:shadow-lg"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="max-h-10 w-auto object-contain transition duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second row for better coverage - shows remaining logos */}
          <div
            className="flex marquee-track gap-8 items-center mt-6"
            style={{ animationDirection: "reverse" as const }}
          >
            <div className="flex items-center gap-8 min-w-max">
              {logos.slice(Math.floor(logos.length / 2)).map((item, index) => (
                <div
                  key={`c-${index}`}
                  className="flex-shrink-0 w-36 h-16 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center px-4 py-2 transition-all duration-300 hover:shadow-lg"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="max-h-10 w-auto object-contain transition duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div
              className="flex items-center gap-8 min-w-max"
              aria-hidden="true"
            >
              {logos.slice(Math.floor(logos.length / 2)).map((item, index) => (
                <div
                  key={`d-${index}`}
                  className="flex-shrink-0 w-36 h-16 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center px-4 py-2 transition-all duration-300 hover:shadow-lg"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="max-h-10 w-auto object-contain transition duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
