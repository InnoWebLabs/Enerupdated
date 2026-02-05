

const images = [
  "20180222_170622.jpg",
  "20180222_170640.jpg",
  "20180410_191238.jpg",
  "20180703_132203.jpg",
  "20230115_190608.jpg",
  "20230129_151410.jpg",
  "IMG-20180202-WA0010.jpg",
  "IMG-20220824-WA0012.jpg",
  "IMG-20220915-WA0006.jpg",
  "IMG-20220915-WA0010.jpg",
  "IMG-20220915-WA0012.jpg",
  "IMG-20230320-WA0007.jpg",
  "IMG-20230321-WA0009.jpg",
  "IMG20220205170422.jpg",
  "IMG20220915131814.jpg",
  "IMG20230215171500.jpg",
  "IMG20230327180751.jpg",
  "IMG20230329173117.jpg",
  "IMG20230404173532.jpg",
  "IMG20230413104925.jpg",
  "IMG20230424180427.jpg",
  "IMG_0434.jpg",
  "IMG_0436.jpg",
  "IMG_20250710_172001927.jpg",
  "IMG_20250711_175204111.jpg",
  "IMG_3353.jpg",
  "WhatsApp Image 2023-09-09 at 1.35.24 PM (1).jpeg",
];

/**
 * Responsive photo wall for gallery images.
 */
export default function PhotoWall() {
  return (
    <section className="w-full bg-white py-10 px-2 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((img, i) => (
          <div
            key={img}
            className="overflow-hidden rounded-lg shadow-md bg-gray-100 aspect-[4/3] flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`/images/carousel/${img}`}
              alt={`Gallery ${i + 1}`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
