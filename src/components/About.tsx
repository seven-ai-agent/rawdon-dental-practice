import { Shield, Heart, Users, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Prevention First",
    description:
      "We believe prevention is better than cure. Our approach focuses on maintaining great oral health through regular care and education.",
  },
  {
    icon: Users,
    title: "Patient-Centred",
    description:
      "Your needs and concerns are our priority. We involve you in every decision, presenting all options clearly and honestly.",
  },
  {
    icon: Shield,
    title: "Highest Standards",
    description:
      "We follow guidelines set by the BDA, General Dental Council and Care Quality Commission for cross infection and health & safety.",
  },
];

const standards = [
  "Clinical audit and peer review",
  "Continuing postgraduate dental training",
  "All clinical staff GDC registered",
  "Full sterilisation protocols",
  "Bespoke treatment plans",
  "Transparent pricing",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            About Our Practice
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark mt-3 mb-6">
            How We Work
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            Following your initial consultation, we take time to present you
            with all your treatment options and costs in a concise and clear
            way. We aim to find out what is important to our patients and work
            together to decide the best way to carry out treatment, involving
            our patients in the decision making process at every stage.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value) => (
            <div
              key={value.title}
              className="group bg-warm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary-light"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <value.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-dark mb-3">
                {value.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="bg-primary-dark rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Quality Assurance
              </span>
              <h3 className="font-serif text-3xl font-bold text-white mt-3 mb-6">
                Our Commitment to Excellence
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Dental disease is preventable by a combination of good diet,
                good oral hygiene and good dental care — our aim is to work
                together to achieve this. Our systems ensure that we
                consistently meet the highest standards of dental care.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {standards.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block min-h-[400px] bg-gradient-to-br from-primary/20 via-accent/10 to-primary-dark/30 rounded-r-3xl flex items-center justify-center">
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-10">
                  <div className="text-7xl mb-4">🦷</div>
                  <p className="text-white/60 font-serif text-xl italic">Prevention is better than cure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
