import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Treatments" },
  { href: "#team", label: "Our Team" },
  { href: "#care-plans", label: "Care Plans" },
  { href: "#hours", label: "Opening Hours" },
  { href: "#contact", label: "Contact" },
];

const treatments = [
  "Examinations",
  "Fillings",
  "Root Canal Treatment",
  "Crowns & Bridges",
  "Dental Implants",
  "Teeth Whitening",
  "Hygienist Services",
  "Clear Aligners",
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center font-serif font-bold text-accent text-lg">
                R
              </div>
              <div>
                <span className="font-serif text-lg font-semibold">
                  Rawdon Dental
                </span>
                <span className="block text-xs text-white/50 tracking-wider uppercase">
                  Practice
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Providing high quality cosmetic and family dental care to the
              Rawdon community for almost 50 years. Private dental care at
              affordable prices.
            </p>
            <div className="space-y-2">
              <a
                href="tel:01132502844"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                0113 250 2844
              </a>
              <a
                href="mailto:reception@rawdondental.com"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                reception@rawdondental.com
              </a>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Gable House, New Road Side,
                  <br />
                  Rawdon, Leeds LS19 6DD
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-semibold text-white mb-4">Treatments</h4>
            <ul className="space-y-2">
              {treatments.map((treatment) => (
                <li key={treatment}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {treatment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="font-semibold text-white mb-4">Important Info</h4>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
              <p className="text-accent font-semibold text-sm mb-2">
                Emergency Patients
              </p>
              <p className="text-white/60 text-xs leading-relaxed">
                Assessment of emergencies is included in all Care Plans. For
                urgent dental issues, please call us during opening hours.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-white font-semibold text-sm mb-2">
                New Patients
              </p>
              <p className="text-white/60 text-xs leading-relaxed mb-3">
                We welcome new patients. Book online or call us to arrange your
                first appointment.
              </p>
              <a
                href="#contact"
                className="text-accent text-xs font-semibold hover:underline"
              >
                Book now →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Rawdon Dental Practice. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-xs">
            <span>GDC Registered Practice</span>
            <span>CQC Inspected</span>
            <span>BDA Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
