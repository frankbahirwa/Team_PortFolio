import React from "react";

const testimonials = [
  {
    quote: "A Wonderful Experience!",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    name: "Jenny Wilson",
    position: "Owner, Furniture Store",
  },
  {
    quote: "Highly Recommended!",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    name: "Bessie Cooper",
    position: "CEO, Car Rental App",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#1E3A8A] text-white py-16 px-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Testimonials: Trusted by Our Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#1E40AF] p-6 rounded-lg shadow-lg text-center"
          >
            <p className="text-2xl font-semibold mb-4">{testimonial.quote}</p>
            <p className="text-sm leading-relaxed">{testimonial.feedback}</p>
            <div className="mt-6 text-lg font-bold">{testimonial.name}</div>
            <p className="text-sm opacity-75">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}