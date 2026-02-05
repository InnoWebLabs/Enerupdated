import React, { useRef, useState, useEffect } from "react";
import AnimatedCounter from "./AnimatedCounter";
import { useIntersectionObserver } from "./useIntersectionObserver";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.01,
  });

  const shortIntro =
    "Enerquest Solutions Private Limited is a Government of Karnataka licensed Class 1 electrical contractor based in Bengaluru. We deliver end-to-end turnkey electrical services — substations, switchgear, building automation, testing, commissioning and maintenance for industrial, commercial and retail sectors.";

  return (
    <section id="home-about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-xl p-6 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
              About Enerquest Solutions
            </h3>

            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {shortIntro}
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg shadow hover:bg-blue-700 transition transform hover:-translate-y-1"
                aria-label="Know more about Enerquest"
              >
                Know more
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-slate-200 text-slate-800 px-4 py-2.5 rounded-lg hover:bg-slate-50 transition"
              >
                Get a Quote
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { n: 500, label: "Projects", suffix: "+" },
                { n: 15, label: "Years", suffix: "+" },
                { n: "11/33", label: "KV Capacity", suffix: "" },
                { n: 24, label: "Support", suffix: "/7" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center shadow-sm"
                >
                  <div className="text-lg sm:text-2xl font-bold text-blue-600">
                    {typeof s.n === 'string' ? s.n : <AnimatedCounter end={s.n} />}
                    {s.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
