import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-white to-blue-50 animate-fade-in dark:from-gray-900 dark:to-gray-800 dark:text-white relative overflow-hidden"
    >
      <div className="relative z-10">
        {/* CAN 2025 Logo as a tall, left-aligned, semi-transparent background */}
        <div
          className="hidden md:block absolute left-0 top-0 h-full w-[200px] pointer-events-none select-none z-0"
          style={{
            opacity: 0.1,
            overflow: 'hidden',
          }}
        >
          <img
            src="/can2025-logo.png"
            alt="CAN 2025 Logo"
            className="absolute left-0 top-0 h-full w-[400px] object-contain object-right animate-logo-fade-in"
            style={{ transform: 'translateX(-50%)' }}
            draggable="false"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-2xl relative">
              <div className="flex items-center mb-4 relative z-10">
                {/* TickeFy text removed per request */}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative z-10">
                Modern Digital Ticketing for 
                <span className="text-morocco-red"> CAN </span>
                <span className="text-morocco-green">2025</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 dark:text-gray-300 relative z-10">
                TickeFy revolutionizes stadium access with secure, digital tickets and facial recognition technology for 
                the Africa Cup of Nations in Morocco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-tickyfy-green hover:bg-tickyfy-green/90 text-white"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-tickyfy-blue text-tickyfy-blue hover:bg-tickyfy-blue/10 dark:border-tickyfy-blue/70 dark:text-tickyfy-blue/90"
                  asChild
                >
                  <a href="#features">See Features</a>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="bg-white p-6 rounded-xl shadow-xl dark:bg-gray-800">
                <iframe
                  src="https://drive.google.com/file/d/1MTzHW2lWrSkaaqL7xPXHpgKItZ7FmYdb/preview?autoplay=1&mute=1"
                  allow="autoplay"
                  className="w-full h-auto rounded-lg"
                  style={{ aspectRatio: '16/9' }}
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fix the style element by removing the jsx property */}
      <style>{`
        @keyframes logoFadeIn {
          from {
            opacity: 0;
            transform: translateX(-60%);
          }
          to {
            opacity: 1;
            transform: translateX(-50%);
          }
        }
        .animate-logo-fade-in {
          animation: logoFadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
