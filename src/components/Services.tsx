import {
  Stethoscope,
  Sparkles,
  Crown,
  SmilePlus,
  Syringe,
  Shell,
  Scissors,
  Droplets,
  ShieldCheck,
} from "lucide-react";

const treatments = [
  {
    icon: Stethoscope,
    title: "Examinations",
    description:
      "Regular examinations including soft tissue checks, gum and teeth examination, and radiographic investigations to catch problems early.",
    featured: false,
  },
  {
    icon: Sparkles,
    title: "Fillings",
    description:
      "Full range of restorations including amalgam and composite (white) fillings. Tooth-coloured options available for all teeth.",
    featured: false,
  },
  {
    icon: Syringe,
    title: "Root Canal Treatment",
    description:
      "Expert endodontic treatment to save infected or injured teeth, removing the infected portion and sealing with root canal filling material.",
    featured: false,
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    description:
      "From gold crowns to aesthetic tooth-coloured options. Bridges offer an excellent way of permanently replacing missing teeth.",
    featured: true,
  },
  {
    icon: SmilePlus,
    title: "Dental Implants",
    description:
      "Artificial titanium tooth roots inserted into the jaw bone, supporting single teeth, multiple teeth, or dentures after osseointegration.",
    featured: true,
  },
  {
    icon: Shell,
    title: "Dentures",
    description:
      "Removable false teeth in acrylic or metal framework options, restoring your dentition whether you have some or no remaining teeth.",
    featured: false,
  },
  {
    icon: Droplets,
    title: "Teeth Whitening",
    description:
      "Professional whitening using hydrogen peroxide or carbamide peroxide. Results lasting from months up to three years.",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "Hygienist Services",
    description:
      "Professional plaque and calculus removal plus oral hygiene education. Prevention is the best defence against gum disease and tooth loss.",
    featured: false,
  },
  {
    icon: Scissors,
    title: "Clear Aligners",
    description:
      "Discreet clear braces to straighten your teeth without traditional metal brackets. Comfortable and virtually invisible.",
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Treatments
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark mt-3 mb-6">
            Comprehensive Dental Care
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            From routine check-ups to advanced restorative and cosmetic
            treatments, we offer a full range of dental services to keep your
            smile healthy and beautiful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => (
            <div
              key={treatment.title}
              className={`group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                treatment.featured
                  ? "ring-2 ring-accent/30"
                  : "border border-gray-100"
              }`}
            >
              {treatment.featured && (
                <div className="absolute -top-3 right-6 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                  treatment.featured
                    ? "bg-accent/10 text-accent"
                    : "bg-primary-light text-primary"
                } group-hover:bg-primary group-hover:text-white`}
              >
                <treatment.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary-dark mb-3">
                {treatment.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                {treatment.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text-light mb-4">
            We are happy to see patients on our care plan or who choose to pay
            as they go at each visit.
          </p>
          <a
            href="#care-plans"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors animated-underline"
          >
            View our Care Plans →
          </a>
        </div>
      </div>
    </section>
  );
}
