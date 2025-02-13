
import { Star } from "lucide-react";
import { testimonials } from "./data/testimonials";

export const TestimonialsSection = () => (
  <div className="py-16 bg-black">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#00A7E1]">
        Client Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-black border border-[#00A7E1]/30 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#00A7E1] fill-current" />
              ))}
            </div>
            <p className="text-white mb-4 italic">{testimonial.text}</p>
            <div className="text-sm">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-white/60">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
