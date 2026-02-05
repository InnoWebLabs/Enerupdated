import logo from '../public/images/enerquestlogo.png';

type PreloaderProps = {
  isVisible: boolean;
};

export default function Preloader({ isVisible }: PreloaderProps) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-500 z-[9999] ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isVisible}
    >
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
        <div className="mt-6 flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
            <img 
              src={logo} 
              alt="Enerquest Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-lg font-semibold text-gray-700">Enerquest Solutions</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Loading experience...</p>
      </div>
    </div>
  );
}


