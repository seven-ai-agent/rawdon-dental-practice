import { MapPin, Phone, Mail, Navigation } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark mt-3 mb-6">
            Book Your Visit
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            Whether you are a new or existing patient, we would love to hear
            from you. Get in touch to book an appointment or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            {/* Info Cards */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">
                    Our Address
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    Rawdon Dental Practice
                    <br />
                    Gable House, New Road Side
                    <br />
                    Rawdon, Leeds LS19 6DD
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">
                    Give Us a Call
                  </h3>
                  <a
                    href="tel:01132502844"
                    className="text-text-light hover:text-primary transition-colors text-lg"
                  >
                    0113 250 2844
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:reception@rawdondental.com"
                    className="text-text-light hover:text-primary transition-colors"
                  >
                    reception@rawdondental.com
                  </a>
                </div>
              </div>
            </div>

            {/* New Patient Info */}
            <div className="bg-accent-light rounded-2xl p-6 border border-accent/20">
              <h3 className="font-serif text-lg font-semibold text-primary-dark mb-3">
                New Patients Welcome
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-4">
                If you are a new patient, you can book an appointment online.
                Once booked, a member of our reception team will contact you to
                take a £50 deposit to secure your appointment.
              </p>
              <a
                href="https://soe2olb.3pointdata.com/soe/new/Rawdon%20Dental%20Practice?pid=UKPNY01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                Book Online — New Patients
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[500px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.1!2d-1.6847!3d53.8441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795e2c2f0a1f25%3A0x5b5f5e5e5e5e5e5e!2sRawdon%20Dental%20Practice!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rawdon Dental Practice Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
