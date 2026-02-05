import { useState } from 'react';
import ImageLightbox from '../components/ImageLightbox';

export default function RittalDropdown() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'IMG_20230908_153059.jpg',
    'IMG_20230908_154648.jpg',
    'IMG_20230908_154746.jpg',
    'IMG_20230908_154830.jpg',
    'IMG_20230908_155130.jpg',
    'IMG_20230908_155219.jpg',
    'WhatsApp Image 2023-09-09 at 1.41.17 PM.jpeg',
    'New (1).jpg',
    'New (2).jpg',
    'New (3).jpg',
  ];

  const basePath = '/images/Rittal-Pvt-Ltd';

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
      <div className="w-full p-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-t-lg shadow-lg">
        <div className="text-center">
          <h3 className="text-3xl font-bold">Rittal Pvt. Ltd</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white border-l-4 border-r-4 border-b-4 border-violet-200 rounded-b-lg">
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
                alt={`Rittal Pvt. Ltd Project - Image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  Image {index + 1}
                </div>
              </div>
              
              {/* Click overlay for full view */}
              <div className="absolute inset-0 bg-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-2 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          imageAlt={`Rittal Pvt. Ltd - Image ${currentImageIndex + 1}`}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={currentImageIndex}
          totalImages={images.length}
        />
      </div>
    </div>
  );
}
