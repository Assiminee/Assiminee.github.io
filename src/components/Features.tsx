
import { 
  Ticket, QrCode, Calendar,
  Users, Check, Image,
  FileText, Link
} from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: <Ticket className="h-8 w-8 md:h-10 md:w-10 text-tickyfy-green" />,
    title: "Digital Ticket Management",
    description: "Seamlessly manage your tickets digitally with secure storage and easy retrieval.",
  },
  {
    icon: <QrCode className="h-8 w-8 md:h-10 md:w-10 text-tickyfy-blue" />,
    title: "QR Code Validation",
    description: "Quick and secure entry with QR code-based ticket validation at stadium gates.",
  },
  {
    icon: <Image className="h-8 w-8 md:h-10 md:w-10 text-morocco-red" />,
    title: "Facial Recognition",
    description: "Advanced facial recognition technology for secure and fast stadium entry.",
  },
  {
    icon: <FileText className="h-8 w-8 md:h-10 md:w-10 text-tickyfy-blue" />,
    title: "PDF Download",
    description: "Download your tickets as PDF files for offline access and printing options.",
  },
  {
    icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-morocco-green" />,
    title: "Seat Allocation",
    description: "Intelligent seat allocation system ensuring the best experience for all fans.",
  },
  {
    icon: <Calendar className="h-8 w-8 md:h-10 md:w-10 text-morocco-red" />,
    title: "Match Scheduling",
    description: "Stay updated with the latest match schedules and venue information.",
  },
  {
    icon: <Check className="h-8 w-8 md:h-10 md:w-10 text-tickyfy-green" />,
    title: "Secure Authentication",
    description: "Token-based authentication ensuring your ticket data remains protected.",
  },
  {
    icon: <Link className="h-8 w-8 md:h-10 md:w-10 text-tickyfy-blue" />,
    title: "Mobile Integration",
    description: "Fully responsive design that works perfectly on all mobile devices.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Key Features</h2>
          <div className="w-16 md:w-24 h-1 bg-morocco-red mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300 px-2">
            Discover how TickyFy is revolutionizing the ticketing experience for
            the Africa Cup of Nations 2025 in Morocco.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-4 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow rounded-xl hover:border-tickyfy-green dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="text-center mb-3 md:mb-4 transform hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-center">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
