import { Phone, Calendar, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">
              Almost 50 Years of Excellence in Dental Care
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Smile,{" "}
            <span className="text-accent">Our Passion</span>
          </h1>

          <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            Rawdon Dental Practice has been providing high quality cosmetic and
            family dental care to the local community for almost 50 years. Private
            dental care at affordable prices, delivered with warmth and expertise.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Book an Appointment
            </a>
            <a
              href="tel:01132502844"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium transition-all"
            >
              <Phone className="w-5 h-5" />
              0113 250 2844
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { number: "50", suffix: "yrs", label: "Serving Rawdon" },
              { number: "6", suffix: "+", label: "Expert Dentists" },
              { number: "5", suffix: "★", label: "Patient Experience" },
              { number: "100", suffix: "%", label: "Private Care" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center sm:text-left"
              >
                <div className="text-3xl font-bold text-white">
                  {stat.number}
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
