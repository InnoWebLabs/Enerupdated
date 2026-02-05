

/**
 * AnimatedGalleryIntro: A full-page animated intro for the Gallery page.
 * Reusable, responsive, and overlays the top of the page.
 */

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

function MarqueeRow({ images, reverse = false, speed = 30 }: { images: string[]; reverse?: boolean; speed?: number }) {
  // speed: seconds for one full loop (lower = faster)
  // Repeat images 3x to ensure no empty space
  const repeated = [...images, ...images, ...images];
  return (
    <div className="w-full overflow-hidden py-2 flex items-center" style={{ minHeight: '4.5rem' }}>
      <div
        className={`flex gap-6 items-center ${reverse ? 'flex-row-reverse' : ''} marquee-track`}
        style={{
          animation: `slide-left ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {repeated.map((img, i) => (
          <img
            key={img + i}
            src={`/images/carousel/${img}`}
            alt="gallery chain"
            className="h-28 md:h-36 w-auto rounded-xl shadow-xl object-cover select-none pointer-events-none border-2 border-white/60"
            draggable={false}
            style={{ minWidth: 120, maxWidth: 220 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function AnimatedGalleryIntro() {
  // Split images for 3 rows, shuffle for variety
  // Distribute images evenly for full rows
  const row1 = images.filter((_, i) => i % 3 === 0);
  const row2 = images.filter((_, i) => i % 3 === 1);
  const row3 = images.filter((_, i) => i % 3 === 2);

  return (
    <section
      className="min-h-screen w-full relative overflow-hidden bg-gradient-primary flex items-center justify-center"
      style={{ zIndex: 10 }}
    >
      {/* Animated blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      {/* Optional: Add sparkles/particles for extra effect */}
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      {/* Overlay for vignette */}
      <div className="hero-vignette" />
      {/* Vertically center heading and photo chains together */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        {/* Blurred background behind the intro text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-3xl h-40 md:h-52 mx-auto rounded-2xl bg-white/10 shadow-lg" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white text-glow animate-float mb-4 text-center relative">
          Welcome to the Gallery
        </h1>
      </div>
      <div className="absolute left-0 right-0 mt-24 z-0 pointer-events-none flex flex-col items-center" style={{ filter: 'blur(0.5px)', opacity: 0.8 }}>
        <div className="w-full max-w-full mb-6">
          <MarqueeRow images={row1} speed={45} reverse={true} />
        </div>
        <div className="w-full max-w-full mb-6">
          <MarqueeRow images={row2} speed={45} reverse={false} />
        </div>
        <div className="w-full max-w-full">
          <MarqueeRow images={row3} speed={45} reverse={true} />
        </div>
      </div>
    </section>
  );
}
