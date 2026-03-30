import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Maintenance Plan",
    price: "17.95",
    period: "per month",
    featured: false,
    features: [
      "Two dental examinations per year",
      "Routine oral cancer screening",
      "X-rays as necessary",
      "Simple scale and polish (2× 20 min hygienist visits)",
      "Assessment of emergencies",
      "Treatment planning",
      "20% discount on all dental fees",
      "Remedial work within 12 months of placement",
    ],
    note: "Excludes implants, Clear Braces and Endodontist referrals",
  },
  {
    name: "Care Plan",
    price: "20.20",
    period: "per month",
    featured: true,
    features: [
      "Two dental examinations per year",
      "Routine oral cancer screening",
      "X-rays as necessary",
      "Extensive scale and polish (2× 30 min hygienist visits)",
      "Assessment of emergencies",
      "Treatment planning",
      "20% discount on all dental fees",
      "Remedial work within 12 months of placement",
    ],
    note: "Excludes implants, Clear Braces and Endodontist referrals",
  },
  {
    name: "Care Plan Plus",
    price: "30.57",
    period: "per month",
    featured: false,
    features: [
      "Two dental examinations per year",
      "Routine oral cancer screening",
      "X-rays as necessary",
      "Extensive hygiene incl. active gum treatment (4× 30 min visits)",
      "Assessment of emergencies",
      "Treatment planning",
      "20% discount on all dental fees",
      "Remedial work within 12 months of placement",
    ],
    note: "Excludes implants, Clear Braces and Endodontist referrals",
  },
];

export default function CarePlans() {
  return (
    <section id="care-plans" className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Care Plans
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark mt-3 mb-6">
            Affordable Preventative Care
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            Our plans are designed for everyone who wishes to attend the
            practice on a regular basis and have peace of mind that their
            preventative care is covered. Patients are also welcome to pay as
            they go at each visit.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "bg-primary-dark text-white shadow-2xl shadow-primary/20 ring-4 ring-accent/30 scale-[1.02]"
                  : "bg-white border border-gray-100 hover:shadow-xl"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-semibold px-5 py-1.5 rounded-full flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`font-serif text-xl font-semibold mb-4 ${
                    plan.featured ? "text-white" : "text-primary-dark"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={`text-5xl font-bold ${
                      plan.featured ? "text-accent" : "text-primary"
                    }`}
                  >
                    £{plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.featured ? "text-white/60" : "text-text-light"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.featured ? "text-accent" : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-white/80" : "text-text-light"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={`text-xs mb-6 ${
                  plan.featured ? "text-white/50" : "text-text-light/60"
                }`}
              >
                * {plan.note}
              </p>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-semibold transition-all ${
                  plan.featured
                    ? "bg-accent hover:bg-accent/90 text-white"
                    : "bg-primary-light hover:bg-primary hover:text-white text-primary"
                }`}
              >
                Join This Plan
              </a>
            </div>
          ))}
        </div>

        {/* Extra Benefits */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 text-center border border-gray-100">
          <h3 className="font-serif text-xl font-semibold text-primary-dark mb-4">
            Extra Benefits Included
          </h3>
          <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
            All care plans include an emergency assistance scheme covering
            treatment required due to pain or following an accident, plus
            reimbursement of the majority of emergency costs incurred when away
            from home, or for weekend and bank holiday emergency care.
          </p>
          <div className="mt-6">
            <p className="text-sm text-text-light">
              <span className="font-semibold text-primary-dark">
                No assessment needed —
              </span>{" "}
              call the Practice or visit us to register on a Care Plan today.
            </p>
          </div>
        </div>

        {/* Pay As You Go note */}
        <div className="text-center mt-8">
          <p className="text-text-light">
            Not on a plan? Unregistered patients welcome — maximum initial
            consultation fee of{" "}
            <span className="font-semibold text-primary-dark">£150.00</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
