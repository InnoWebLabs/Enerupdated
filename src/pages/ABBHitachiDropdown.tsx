import { useState } from 'react';
import ImageLightbox from '../components/ImageLightbox';

export default function ABBHitachiDropdown() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '20210331_165502.jpg',
    '20210331_192142.jpg',
    '20210404_135814.jpg',
    '20210404_135847.jpg',
    '20210409_160310.jpg',
    '20210412_122537.jpg',
    'New (1).jpg',
    'New (2).jpg',
  ];

  const basePath = '/images/ABB-HITACHI';

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="w-full p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg shadow-lg">
        <div className="text-center">
          <h3 className="text-3xl font-bold">ABB-HITACHI</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white border-l-4 border-r-4 border-b-4 border-blue-200 rounded-b-lg">
        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={`${basePath}/${image}`}
                alt={`ABB-HITACHI Project - Image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  Image {index + 1}
                </div>
              </div>
              
              {/* Click overlay for full view */}
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-2 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ImageLightbox
          isOpen={lightboxOpen}
          imageSrc={`${basePath}/${images[currentImageIndex]}`}
          imageAlt={`ABB-HITACHI - Image ${currentImageIndex + 1}`}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={currentImageIndex}
          totalImages={images.length}
        />

        {/* YouTube Video */}
        <div className="mt-6">
          <div className="w-full flex justify-center">
            <div className="aspect-video w-full max-w-md rounded-xl overflow-hidden shadow-lg border-2 border-blue-300">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/hXOW3Rxltyc?si=lQlGJfk-gMdeeleE"
                title="ABB-HITACHI Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
