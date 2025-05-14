import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">About TickeFy</h2>
          <div className="w-16 md:w-24 h-1 bg-tickyfy-green mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300 px-2">
            A modern digital ticketing solution specifically designed for the 2025 Africa Cup of Nations in Morocco,
            providing a seamless experience for football fans.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="max-w-3xl px-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why Choose TickeFy?</h3>
            
            <ul className="space-y-3 md:space-y-4">
              {[
                "Digital ticket management with QR code validation",
                "Facial recognition for seamless stadium entry",
                "Secure ticket storage and retrieval",
                "PDF ticket download functionality",
                "Responsive design for all devices",
                "Moroccan-themed interface with national colors",
                "Token-based authentication for security",
                "Real-time seat allocation system"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 md:mr-3 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-tickyfy-green" />
                  </span>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
