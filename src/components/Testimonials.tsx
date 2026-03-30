import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "I have been a patient at Rawdon Dental for many years. The whole team are always friendly and welcoming. The standard of treatment is excellent and I would highly recommend the practice.",
    author: "Patient Review",
    rating: 5,
  },
  {
    text: "Absolutely fantastic dental practice. The dentists and hygienists are brilliant and always make you feel at ease. A really professional service from start to finish.",
    author: "Patient Review",
    rating: 5,
  },
  {
    text: "The team at Rawdon Dental are outstanding. They took the time to explain all my treatment options clearly and the results have been amazing. Can't recommend them highly enough.",
    author: "Patient Review",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Patient Feedback
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark mt-3 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            Our patients have always been our priority. Here is what some of
            them have to say about their experience with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative bg-warm rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-accent/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="text-text leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="font-serif font-bold text-primary">
                    {testimonial.author[0]}
                  </span>
                </div>
                <span className="text-sm font-medium text-primary-dark">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-12 border-t border-gray-100">
          {[
            { label: "BDA Member", icon: "🦷" },
            { label: "GDC Registered", icon: "✓" },
            { label: "CQC Inspected", icon: "🛡️" },
            { label: "24 Reviews on Birdeye", icon: "⭐" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-text-light"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
