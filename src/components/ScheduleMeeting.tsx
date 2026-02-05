import { useState, useEffect } from 'react';

export default function ScheduleMeeting() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Load Calendly widget script only when needed
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      return () => {
        document.body.removeChild(script);
        document.head.removeChild(link);
      };
    }
  }, [isOpen]);

  const toggleScheduler = () => {
    setIsOpen(!isOpen);
  };

  const openInNewTab = () => {
    window.open('https://calendly.com/stormedak/30min', '_blank');
  };

  return (
    <div className="glass rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
        
        <h3 className="text-xl font-bold mb-1">Schedule a Call</h3>
        <p className="text-sm opacity-80 mb-4">30-minute consultation</p>
        
        <div className="flex flex-col space-y-3">
          <button 
            onClick={toggleScheduler}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Choose a Time</span>
            <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={openInNewTab}
            className="group text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center justify-center space-x-1.5 px-2 py-1 rounded-md hover:bg-blue-50"
          >
            <span className="relative">
              <span className="relative z-10">or open in new tab</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200 group-hover:h-1/2 group-hover:bg-blue-100 transition-all duration-200"></span>
            </span>
            <svg className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 animate-fade-in">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/stormedak/30min" 
              style={{ 
                minWidth: '280px', 
                height: '500px', 
                borderRadius: '8px', 
                overflow: 'hidden',
                margin: '0 auto',
                maxWidth: '100%'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
