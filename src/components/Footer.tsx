import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/images/enerquestlogo.png';
import brochure from '../public/Enerquest_Solutions__Brochure.pdf';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-14 shadow-2xl rounded-t-3xl border-t-4 border-blue-400 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4"
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="bg-white/5 rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full hover:bg-white/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="Enerquest Solutions logo"
                className="w-14 h-14 rounded-2xl shadow-xl object-contain bg-white/90 p-1 border-2 border-blue-400"
              />
              <div>
                <span className="text-xl font-bold">Enerquest Solutions</span>
                <p className="text-xs text-gray-400">ISO 9001:2015 Certified</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed italic">
              Leading electrical contractor and engineering company committed to excellence and innovation.
            </p>
            <div className="flex space-x-4 mt-2">
              <motion.a 
                href="https://www.youtube.com/@enerquestsolutions8096" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white hover:scale-110 hover:bg-red-600 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <i className="fab fa-youtube" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/enerquest-soultions-pvt-ltd/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white hover:scale-110 hover:bg-green-500 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              >
                <i className="fab fa-linkedin-in" />
              </motion.a>
              <motion.a 
                href="mailto:info@enerquest.in"
                className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white hover:scale-110 hover:bg-blue-500 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              >
                <i className="fas fa-envelope" />
              </motion.a>
            </div>
            <div className="mt-6">
              <motion.a 
                href={brochure}
                download
                className="inline-flex items-center space-x-2 text-blue-300 hover:text-white transition-colors duration-300 font-semibold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-download text-blue-400" />
                <span>Download Brochure</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/5 rounded-2xl p-6 shadow-lg h-full hover:bg-white/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center text-blue-300">
              <i className="fas fa-link text-blue-400 mr-2" />
              Quick Links
            </h4>
            <div className="space-y-3">
              <motion.div whileHover={{ x: 5 }}>
                <Link to="/" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                  <i className="fas fa-chevron-right text-xs mr-2" />
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link to="/about" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                  <i className="fas fa-chevron-right text-xs mr-2" />
                  About
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link to="/services" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                  <i className="fas fa-chevron-right text-xs mr-2" />
                  Services
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link to="/projects" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                  <i className="fas fa-chevron-right text-xs mr-2" />
                  Projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link to="/certifications" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                  <i className="fas fa-chevron-right text-xs mr-2" />
                  Certifications
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link to="/gallery" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                  <i className="fas fa-chevron-right text-xs mr-2" />
                  Gallery
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link to="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                  <i className="fas fa-chevron-right text-xs mr-2" />
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/5 rounded-2xl p-6 shadow-lg h-full flex flex-col justify-between hover:bg-white/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center text-blue-300">
              <i className="fas fa-info-circle text-green-400 mr-2" />
              Contact Info
            </h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <i className="fas fa-phone text-blue-400 mr-3 w-5" />
                <span>+91 9036727331</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-green-400 mr-3 w-5" />
                <span>info@enerquest.in</span> 
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-green-400 mr-3 w-5" />
                <span>venkatesh@enerquest.in</span>
              </div>
              <div className="flex flex-col">
                <div className="mb-2 border-b border-blue-400 pb-2">
                  <span className="font-semibold text-blue-200 text-sm">Location</span>
                </div>
                <motion.div 
                  className="overflow-hidden rounded-xl shadow-2xl border-2 border-blue-400/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4241.143839841792!2d77.5093653!3d13.0438388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d006a173b81%3A0x868b59efe060d698!2sENERQUEST%20SOLUTIONS%20PVT%20LTD!5e1!3m2!1sen!2sin!4v1758528313461!5m2!1sen!2sin" 
                    width="320" 
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Enerquest Solutions Location"
                    className="w-full h-full"
                  ></iframe>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-8 pt-4 text-center text-blue-200 text-sm tracking-wide bg-gradient-to-r from-blue-900/30 to-blue-800/10 rounded-b-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="mb-0.5">&copy; 2025 <span className="font-bold text-blue-300">Enerquest Solutions Pvt Ltd.</span> All rights reserved.</p>
          <p className="text-xs mb-0">ISO 9001:2015 Certified | Government Licensed</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
