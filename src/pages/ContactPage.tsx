import { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import ScheduleMeeting from '../components/ScheduleMeeting';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us - Enerquest Solutions';
  }, []);

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <ContactSection />
      
      {/* Schedule Section */}
      <div className="relative py-16 md:py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-70"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Schedule a Call
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Let's Talk About Your Project</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book a 30-minute consultation call at your convenience. We'll discuss how we can help bring your project to life.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto
              grid grid-cols-1 lg:grid-cols-3 gap-8
              bg-white rounded-2xl shadow-xl overflow-hidden
              border border-gray-100">
            
            {/* Left Side - Info */}
            <div className="lg:col-span-1 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-10">
              <div className="h-full flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Quick Connect</h3>
                  <p className="text-blue-100 mb-8">
                    Prefer to connect directly? Here's how you can reach us:
                  </p>
                </div>
                
                <div className="space-y-6 mt-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Call Us</h4>
                      <a href="tel:+919036727331" className="text-blue-100 hover:text-white text-sm">+91 9036727331</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Email Us</h4>
                      <a href="mailto:info@enerquest.in" className="text-blue-100 hover:text-white text-sm">info@enerquest.in</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-8">
                  <div className="text-sm text-blue-200">
                    <p>Available Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Schedule Form */}
            <div className="lg:col-span-2 p-8 md:p-10">
              <div className="max-w-md mx-auto">
                <ScheduleMeeting />
                <p className="text-center text-sm text-gray-500 mt-6">
                  By scheduling, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
