import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 md:py-12 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/24bfd42d-216e-4e22-8c0b-80e200bff779.png" 
                alt="TickyFy Logo" 
                className="h-6 md:h-8 brightness-0 invert"
              />
              <span className="text-lg md:text-xl font-bold">
                Ticke<span className="text-tickyfy-green">Fy</span>
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-400">
              Modern digital ticketing solution for the Africa Cup of Nations 2025 in Morocco.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors inline-block py-1">About</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Features</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Team</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 py-1">Digital Tickets</li>
              <li className="text-gray-400 py-1">QR Code Validation</li>
              <li className="text-gray-400 py-1">Facial Recognition</li>
              <li className="text-gray-400 py-1">Secure Authentication</li>
              <li className="text-gray-400 py-1">Mobile Integration</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-tickyfy-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm md:text-base">contact@tickyfy.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-tickyfy-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm md:text-base">+212 522 123 456</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 text-sm md:text-base">
            &copy; {new Date().getFullYear()} TickeFy. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-8">
            <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors py-1">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors py-1">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
