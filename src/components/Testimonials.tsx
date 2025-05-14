
import { Card } from "./ui/card";

const testimonials = [
  {
    quote: "TickyFy has revolutionized how we manage stadium access. The facial recognition technology and digital tickets have drastically reduced entry times.",
    author: "CAF Official",
    title: "African Football Confederation"
  },
  {
    quote: "As a football fan, I appreciate how easy it is to purchase, store and use tickets through TickyFy. No more paper tickets to worry about!",
    author: "Football Fan",
    title: "CAN 2025 Attendee"
  },
  {
    quote: "The security features in TickyFy give us confidence that only authorized fans can enter the stadium, eliminating fraud and improving crowd management.",
    author: "Stadium Manager",
    title: "Morocco 2025 Venue"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">What People Are Saying</h2>
          <div className="w-16 md:w-24 h-1 bg-morocco-green mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300 px-2">
            Our digital ticketing solution is making a real impact for CAN 2025 stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-white border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl relative overflow-hidden dark:bg-gray-800"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-tickyfy-green to-tickyfy-blue"></div>
              <div className="text-3xl md:text-4xl font-serif text-gray-200 dark:text-gray-700 mb-3 md:mb-4">"</div>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 md:mb-6 italic">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-bold text-sm md:text-base">{testimonial.author}</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
