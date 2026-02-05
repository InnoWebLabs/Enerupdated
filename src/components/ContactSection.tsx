import { useIntersectionObserver } from './useIntersectionObserver';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const [state, handleSubmit] = useForm("xandbjrk");

  const contactInfo = [
    { icon: 'fas fa-phone', title: 'Phone', value: '+91 9036727331', link: 'tel:+919036727331', color: 'bg-gradient-primary' },
    { icon: 'fas fa-envelope', title: 'Email', value: ['info@enerquest.in', 'venkatesh@enerquest.in'], link: ['mailto:info@enerquest.in', 'mailto:venkatesh@enerquest.in'], color: 'bg-gradient-secondary' },
    { icon: 'fas fa-globe', title: 'Website', value: 'www.enerquest.in', link: 'https://www.enerquest.in', color: 'bg-gradient-accent' },
    { icon: 'fas fa-map-marker-alt', title: 'Address', value: '#58, 1st cross, K K Road, Behind Metro Station, Maheswari Nagar, T.Dasarahalli, Bangalore - 560057', link: '#', color: 'bg-gradient-dark' }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#1e357a] via-[#2959CA] to-[#6ea8ff] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 20%, #ffffff 0, transparent 35%), radial-gradient(circle at 80% 0%, #ffffff 0, transparent 30%)'}} />
      <div className="container mx-auto px-4 relative">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-300" />
              <span className="text-xs tracking-wide uppercase opacity-90">We're here to help</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Get In Touch</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto font-light">
              Ready to power your next project? Contact us for expert electrical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info - Left */}
            <div>
              <div className="glass rounded-2xl p-6 md:p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Contact Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center hover:bg-white/15 transition-colors card-hover">
                      <div className={`w-14 h-14 ${info.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                        <i className={`${info.icon} text-xl text-white`} />
                      </div>
                      <h4 className="text-base font-semibold mb-2">{info.title}</h4>
                      {Array.isArray(info.value) ? (
                        <div className="flex flex-col items-center gap-1">
                          {info.value.map((email, i) => (
                            <a
                              key={email}
                              href={info.link[i]}
                              className="text-sm opacity-90 hover:opacity-100 transition-opacity hover:underline break-all"
                            >
                              {email}
                            </a>
                          ))}
                        </div>
                      ) : (typeof info.link === 'string' && info.link !== '#') ? (
                        <a href={info.link as string} className="text-sm opacity-90 hover:opacity-100 transition-opacity hover:underline">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm opacity-90">{info.value}</p>
                      )}
                    </div>
                  ))}
                </div>
                {/* Removed extra info line as requested */}
              </div>
            </div>

            {/* Form - Right */}
            <div>
              <div className="glass p-6 md:p-8 rounded-2xl shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">Send us a Message</h3>
                  <p className="text-sm opacity-90 mt-1">We typically reply within 24 hours.</p>
                </div>

                {state.succeeded ? (
                  <div className="text-center py-10">
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                    <p className="text-lg opacity-90">Your message has been sent successfully. We'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} autoComplete="off" className="space-y-6">
                    {/* Honeypot field for spam prevention */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                    
                    {/* reCAPTCHA spam protection */}
                    <input 
                      type="hidden" 
                      name="_captcha" 
                      value="false" 
                      className="hidden"
                    />
                    
                    {/* Name and Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Full Name *</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          placeholder="John Doe" 
                          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300" 
                          required
                        />
                        <ValidationError 
                          prefix="Name" 
                          field="name"
                          errors={state.errors}
                          className="text-red-300 text-sm mt-1 block"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">Company *</label>
                        <input 
                          type="text" 
                          id="company"
                          name="company"
                          placeholder="Company Name" 
                          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300" 
                          required
                        />
                        <ValidationError 
                          prefix="Company" 
                          field="company"
                          errors={state.errors}
                          className="text-red-300 text-sm mt-1 block"
                        />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email *</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          placeholder="your.email@example.com" 
                          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300" 
                          required
                        />
                        <ValidationError 
                          prefix="Email" 
                          field="email"
                          errors={state.errors}
                          className="text-red-300 text-sm mt-1 block"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 123-4567" 
                          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300" 
                          required
                        />
                        <ValidationError 
                          prefix="Phone" 
                          field="phone"
                          errors={state.errors}
                          className="text-red-300 text-sm mt-1 block"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-white/80 mb-1">Inquiry Type *</label>
                      <input 
                        type="text" 
                        id="inquiryType"
                        name="inquiryType"
                        placeholder="e.g., General Inquiry, Project Quote, Support" 
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300" 
                        required
                      />
                      <ValidationError 
                        prefix="Inquiry Type" 
                        field="inquiryType"
                        errors={state.errors}
                        className="text-red-300 text-sm mt-1 block"
                      />
                    </div>

                    {/* Project Location */}
                    <div>
                      <label htmlFor="projectLocation" className="block text-sm font-medium text-white/80 mb-1">Project Location</label>
                      <input 
                        type="text" 
                        id="projectLocation"
                        name="projectLocation"
                        placeholder="City, State/Province, Country" 
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300" 
                      />
                    </div>

                    {/* Preferred Callback Times */}
                    <div>
                      <label htmlFor="callbackTimes" className="block text-sm font-medium text-white/80 mb-1">Preferred Callback Times</label>
                      <input 
                        type="text" 
                        id="callbackTimes"
                        name="callbackTimes"
                        placeholder="e.g., Weekday afternoons, Mornings before 11 AM" 
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300" 
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Brief Message *</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project or inquiry..." 
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none" 
                        required
                      />
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        className="text-red-300 text-sm mt-1 block"
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={state.submitting}
                      className="w-full bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      <i className="fas fa-paper-plane" />
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


