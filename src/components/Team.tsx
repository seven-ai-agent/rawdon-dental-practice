const dentists = [
  {
    name: "Penny Allen",
    qualifications: "BDS",
    gdc: "74703",
    role: "Partner",
    bio: "Penny has been a partner at Rawdon Dental Practice since 2004. She qualified in 1998 from Sheffield University and was awarded 'The Sheffield Dental Practitioners Club Prize' for the highest set of standards in conduct, courtesy, humanity and kindness in the treatment of patients.",
    speciality: "General Dentistry, Anxious Patients",
    initials: "PA",
  },
  {
    name: "Simon Ward",
    qualifications: "BChD",
    gdc: "82201",
    role: "Dentist",
    bio: "Simon joined Rawdon Dental Practice in 2011. He qualified from Leeds University in 2003 and has gained experience in all aspects of dentistry over the past 15 years. \"I always aim to reassure and put all my patients at ease.\"",
    speciality: "General Dentistry",
    initials: "SW",
  },
  {
    name: "John Hindle",
    qualifications: "BDS",
    gdc: "85823",
    role: "Dentist",
    bio: "John qualified from Newcastle University in 2005 with distinction in restorative dentistry. He has a keen interest in all areas of dentistry and enjoys the challenge of treating nervous patients. John is involved with dental education at Leeds Dental Institute.",
    speciality: "Restorative Dentistry, Education",
    initials: "JH",
  },
  {
    name: "Roland Kouble",
    qualifications: "BDS MFDSRCS MFGDP (UK)",
    gdc: "74723",
    role: "Endodontist & Aligner Specialist",
    bio: "Roland qualified from Sheffield University in 1998 and obtained further qualification from the Royal College of Surgeons of England. He has provided an Endodontic referral service for the past 15 years and now also places clear aligners.",
    speciality: "Endodontics, Clear Aligners",
    initials: "RK",
  },
  {
    name: "Robert Montgomery",
    qualifications: "BChD MFDS RCS Ed, DipImpDent RCS",
    gdc: "82185",
    role: "Implant Dentist",
    bio: "Rob graduated from Leeds University in 2003. His interest in dental implants led him to complete a Diploma in Implant Dentistry through the Royal College of Surgeons, London. He has since completed hundreds of cases.",
    speciality: "Dental Implants",
    initials: "RM",
  },
  {
    name: "Chris Taylor",
    qualifications: "BDS",
    gdc: "271774",
    role: "Dentist",
    bio: "Chris graduated from the University of Sheffield in 2017. He enjoys all aspects of general dentistry and has recently undertaken further postgraduate training in aesthetic and restorative dentistry.",
    speciality: "Aesthetic & Restorative Dentistry",
    initials: "CT",
  },
];

const supportTeam = [
  { name: "Victoria", role: "Hygienist", gdc: "5979" },
  { name: "Lindsey", role: "Hygienist", gdc: "103758" },
  { name: "Nicola", role: "Hygienist", gdc: "101345" },
];

function InitialAvatar({ initials, size = "large" }: { initials: string; size?: "large" | "small" }) {
  const colors = ["bg-primary", "bg-primary-dark", "bg-accent/80", "bg-emerald-700", "bg-teal-700", "bg-cyan-800"];
  const idx = initials.charCodeAt(0) % colors.length;
  
  if (size === "small") {
    return (
      <div className={`w-16 h-16 rounded-full ${colors[idx]} flex items-center justify-center`}>
        <span className="font-serif text-2xl font-bold text-white">{initials}</span>
      </div>
    );
  }
  
  return (
    <div className={`aspect-[4/5] ${colors[idx]} flex items-center justify-center`}>
      <span className="font-serif text-6xl font-bold text-white/90">{initials}</span>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Meet Our Team
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark mt-3 mb-6">
            Expert Care You Can Trust
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            Our experienced team of dentists, hygienists, nurses and
            receptionists are dedicated to providing you with the highest level
            of care in a friendly and relaxed environment.
          </p>
        </div>

        {/* Dentists Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dentists.map((dentist) => (
            <div
              key={dentist.name}
              className="group bg-warm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <InitialAvatar initials={dentist.initials} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary-dark">
                      {dentist.name}
                    </h3>
                    <p className="text-sm text-text-light">
                      {dentist.qualifications}
                    </p>
                  </div>
                  <span className="bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {dentist.role}
                  </span>
                </div>
                <p className="text-accent text-sm font-medium mb-3">
                  {dentist.speciality}
                </p>
                <p className="text-text-light text-sm leading-relaxed line-clamp-3">
                  {dentist.bio}
                </p>
                <p className="text-xs text-text-light/60 mt-3">
                  GDC: {dentist.gdc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hygienists */}
        <div className="bg-primary-light rounded-2xl p-8 sm:p-10">
          <h3 className="font-serif text-2xl font-semibold text-primary-dark mb-6 text-center">
            Our Hygienists
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {supportTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <InitialAvatar initials={member.name[0]} size="small" />
                </div>
                <h4 className="font-semibold text-primary-dark">
                  {member.name}
                </h4>
                <p className="text-sm text-text-light">{member.role}</p>
                <p className="text-xs text-text-light/60 mt-1">
                  GDC: {member.gdc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-light mt-6 text-sm">
            Supported by our dedicated{" "}
            <span className="font-semibold text-primary-dark">
              nursing team
            </span>{" "}
            and{" "}
            <span className="font-semibold text-primary-dark">
              reception team
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
