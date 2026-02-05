import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../public/images/enerquestlogo.png';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // show blue background on mobile/tablet for homepage (but keep desktop transparent when not scrolled)
  const isHome = location.pathname === '/';
  const navBgClass = !isHome || isScrolled
    ? 'bg-[#2E66D8] border-b border-blue-700/20'
    : 'bg-[#2E66D8] lg:bg-transparent';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home', path: '/' },
    { id: 'about', label: 'About', icon: 'fas fa-info-circle', path: '/about' },
    { id: 'services', label: 'Services', icon: 'fas fa-cogs', path: '/services' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-project-diagram', path: '/projects' },
    { id: 'certifications', label: 'Certifications', icon: 'fas fa-certificate', path: '/certifications' },
    { id: 'gallery', label: 'Gallery', icon: 'fas fa-building', path: '/gallery' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope', path: '/contact' }
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    // Always navigate to the page, regardless of current location
    navigate(item.path);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    // Always navigate to home page
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 shadow-2xl drop-shadow-lg ${navBgClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Enerquest Solutions logo"
              className="w-12 h-12 rounded-xl shadow-lg object-contain bg-white/90 p-1"
            />
            <div>
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  location.pathname !== '/' ? 'text-white' : (isScrolled ? 'text-white' : 'text-white')
                }`}
              >
                Enerquest Solutions
              </span>
              <p className={`text-xs transition-colors duration-300 ${
                location.pathname !== '/' ? 'text-white/80' : (isScrolled ? 'text-white/80' : 'text-white/80')
              }`}>
                ISO 9001:2015 Certified
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`nav-item flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                  location.pathname === item.path
                    ? 'bg-white/20 text-white shadow-lg'
                    : location.pathname === '/' 
                      ? 'text-white hover:text-white hover:bg-white/10'
                      : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <i className={`${item.icon} text-sm`} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
          </button>
        </div>

        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  location.pathname === item.path
                    ? 'bg-white/20 text-white'
                    : location.pathname === '/' 
                      ? 'text-white hover:text-white hover:bg-white/10'
                      : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <i className={item.icon} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}


