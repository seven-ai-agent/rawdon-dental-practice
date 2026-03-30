import { Clock, AlertCircle } from "lucide-react";

const hours = [
  { day: "Monday", hours: "9:00am — 6:00pm", open: true },
  { day: "Tuesday", hours: "8:00am — 6:00pm", open: true },
  { day: "Wednesday", hours: "8:00am — 6:00pm", open: true },
  { day: "Thursday", hours: "8:00am — 6:00pm", open: true },
  { day: "Friday", hours: "8:00am — 4:00pm", open: true },
  { day: "Saturday", hours: "Closed", open: false },
  { day: "Sunday", hours: "Closed", open: false },
];

export default function OpeningHours() {
  return (
    <section id="hours" className="py-24 bg-primary-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Opening Hours
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
              When to Visit Us
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 text-lg">
              We offer convenient appointment times throughout the week,
              including early mornings from 8:00am on most days. Book your
              visit at a time that works for you.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">
                    Appointment Reminders
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We send email reminders 2 weeks beforehand and text
                    reminders 48 hours before your appointment. Please
                    give us at least 24 hours notice if you need to cancel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Hours table */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-white">
                  Practice Hours
                </h3>
                <p className="text-white/50 text-sm">
                  Gable House, New Road Side, Rawdon
                </p>
              </div>
            </div>

            <div className="space-y-1">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl transition-colors ${
                    item.open
                      ? "hover:bg-white/5"
                      : "opacity-50"
                  }`}
                >
                  <span className="text-white font-medium">{item.day}</span>
                  <span
                    className={`text-sm font-medium ${
                      item.open ? "text-accent" : "text-white/40"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
