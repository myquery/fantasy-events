// app/components/Footer.tsx
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <span className="text-gray-400">
              © {new Date().getFullYear()} Fantasy Events. All Rights Reserved
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <span className="text-gray-400">
              Designed by{' '}
              <Link 
                href="https://www.astantechnologies.com" 
                target="_blank"
                className="font-bold text-white hover:text-primary-400 transition-colors"
              >
                Astan Technologies
              </Link>
            </span>
            
            <div className="flex space-x-4">
              <Link 
                href="#" 
                target="_blank"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="text-xl" />
              </Link>
              <Link 
                href="#" 
                target="_blank"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="text-xl" />
              </Link>
              <Link 
                href="#" 
                target="_blank"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="text-xl" />
              </Link>
              <Link 
                href="https://wa.me/2348164433875" 
                target="_blank"
                aria-label="WhatsApp"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/2349038254560?text=Hello!%20I%20love%20your%20Fantasy%20Events%20services"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </Link>
    </footer>
  )
}