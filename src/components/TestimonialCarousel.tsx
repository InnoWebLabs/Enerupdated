import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Enerquest Solutions provided us with the best quality service and have become the first choice among class 1 electrical contractors as they fulfill their promises of providing the service in the stipulated time and with the best quality.",
    author: "Satisfied Client",
    company: "Industrial Partner"
  },
  {
    id: 2,
    text: "Enerquest Solutions is one of the Finest Electrical Contractors & Engineers in Bangalore, What a great team! They were able to fix what we needed fast! Amazing with a job well done! I would highly recommend them!",
    author: "Happy Customer",
    company: "Commercial Client"
  },
  {
    id: 3,
    text: "Enerquest Solutions Private Limited is mainly impressive in design, & remarkable in supply, installation, testing, and commissioning of electrical systems.",
    author: "Project Manager",
    company: "Engineering Firm"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8">
      {/* Header with decorative elements */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-600"></div>
          <div className="text-blue-600 text-2xl">💬</div>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-600"></div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
          What Our Clients Say
        </h3>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Main testimonial container with enhanced styling */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-slate-50 shadow-xl border border-blue-100 backdrop-blur-sm">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-4 w-16 h-16 bg-blue-600 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-slate-400 rounded-full blur-3xl"></div>
          </div>
          
          <div 
            className="relative flex transition-all duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 p-6 sm:p-8"
              >
                <div className="text-center relative">
                  {/* Quote styling */}
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-6xl text-blue-200 opacity-30 font-serif leading-none">"</div>
                    <blockquote className="relative z-10 text-sm sm:text-base text-slate-700 leading-relaxed font-medium max-w-4xl mx-auto px-6">
                      {testimonial.text}
                    </blockquote>
                    <div className="absolute -bottom-6 -right-2 text-6xl text-blue-200 opacity-30 font-serif leading-none rotate-180">"</div>
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex justify-center gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className="text-yellow-400 text-lg animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        ⭐
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
        
        {/* Enhanced Navigation dots */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative transition-all duration-400 transform ${
                index === currentIndex
                  ? "scale-125"
                  : "hover:scale-110"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg"
                  : "bg-slate-300 hover:bg-blue-300"
              }`}></div>
              {index === currentIndex && (
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-blue-400 animate-ping opacity-40"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Enhanced Progress bar */}
        <div className="mt-4 max-w-sm mx-auto">
          <div className="relative w-full bg-gradient-to-r from-slate-100 to-slate-200 rounded-full h-1 shadow-inner">
            <div 
              className="absolute top-0 left-0 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-sm transition-all duration-700 ease-out"
              style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            >
              <div className="absolute right-0 top-0 w-2 h-1 bg-blue-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}