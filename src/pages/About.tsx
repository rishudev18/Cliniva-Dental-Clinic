import React from "react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Microscope, Award, HeartHandshake } from "lucide-react";

export const About: React.FC = () => {
  const clinicCoreValues = [
    {
      title: "Patient-First Care",
      desc: "Every recommendation we make is focused solely on what is best for your long-term oral health and overall comfort.",
      icon: HeartHandshake,
    },
    {
      title: "Hospital-Grade Sterilization",
      desc: "Our clinic exceeds safety standards, employing steam autoclave sterilization and disposable checkup kits.",
      icon: ShieldCheck,
    },
    {
      title: "Advanced Technologies",
      desc: "We invest in cutting-edge diagnostics, including intraoral 3D scanners, CBCT bone imaging, and pain-free laser tools.",
      icon: Microscope,
    },
    {
      title: "Clinical Excellence",
      desc: "All complex treatments are coordinated by board-certified specialists with BDS and MDS qualifications.",
      icon: Award,
    },
  ];

  const technologies = [
    { name: "3D Intraoral Scanners", desc: "No more uncomfortable silicone trays. We capture 3D scans of your mouth in seconds." },
    { name: "CBCT 3D Bone Scans", desc: "Allows precise diagnostics for implant placement, nerve mapping, and root canals." },
    { name: "Pain-Free Dental Laser", desc: "Performs minor soft-tissue procedures without scalpels, sutures, or heavy bleeding." },
    { name: "Microscopic Endodontics", desc: "Microscope magnification reveals hidden canals for successful root canal treatment." },
  ];

  return (
    <>
      <Helmet>
        <title>About Absolute Dental Clinic - Premium Dentist in Gurugram</title>
        <meta
          name="description"
          content="Learn about Absolute Dental Clinic in DLF Phase 2, Gurugram. Read our clinical values, meet Dr. Rahul, and explore our state-of-the-art dental technology."
        />
        <link rel="canonical" href="https://absolutedental.co.in/about" />
      </Helmet>

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-28 pb-12 bg-surface border-b border-border/40 select-none">
        <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-50"></div>
        <div className="container-px mx-auto max-w-7xl text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            About Our Practice
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Pioneering Modern <span className="text-gradient">Dental Care</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Founded with a commitment to clinical safety and aesthetic precision, we provide a comfortable, patient-first dental experience in DLF Phase 2, Gurugram.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24 text-left">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-4xl text-foreground">
              Our Vision: Redefining the Dental Experience
            </h2>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              For many, visiting the dentist can cause anxiety. At Absolute Dental Clinic, we have built a clinic environment designed to change that. By combining a spa-like clinic ambiance, in-chair entertainment, and ultra-gentle pain-free dentistry, we turn checkups into a comfortable, relaxing visit.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We do not believe in one-size-fits-all treatments. Dr. Rahul and our consulting specialists take the time to explain your clinical options in detail, providing written estimates, diagnostic scans, and customized care plans so you can make informed decisions.
            </p>
          </div>
          
          {/* Diagnostic Imagery Placeholder */}
          <div className="relative select-none">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-teal/5 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=800&auto=format&fit=crop"
              alt="Advanced dental diagnostics scanner"
              className="rounded-3xl border border-border object-cover shadow-card-custom"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-surface border-y border-border/40 py-16 md:py-24 text-left">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-3">
            <h2 className="font-display text-2xl font-bold md:text-4xl text-foreground">
              Our Clinical Values
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These principles guide every clinical decision, checkup, and surgical procedure at our Gurugram clinic.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clinicCoreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="rounded-2xl border border-border bg-card p-6 shadow-card-custom">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24 text-left">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Tech Image Left */}
          <div className="order-2 lg:order-1 select-none">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop"
              alt="State-of-the-art dental clinical technology"
              className="rounded-3xl border border-border object-cover shadow-card-custom"
              loading="lazy"
            />
          </div>

          {/* Tech Details Right */}
          <div className="order-1 lg:order-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
              Clinical Technology
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold md:text-4xl text-foreground">
              World-Class Technology for Precision & Speed
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We leverage dental technology to deliver safer treatments, cut recovery times, and provide absolute precision in cosmetic smile designs and dental implants.
            </p>

            <ul className="mt-6 flex flex-col gap-4">
              {technologies.map((tech) => (
                <li key={tech.name} className="border-l-2 border-teal pl-4 py-0.5">
                  <h4 className="text-sm font-bold text-foreground leading-none">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-snug">{tech.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Location Card */}
      <section className="bg-surface border-t border-border/40 py-16 text-center select-none">
        <div className="container-px mx-auto max-w-4xl flex flex-col items-center gap-4">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Visit Our Clinic In DLF Phase 2
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            We are conveniently located on Jacaranda Marg in DLF Phase 2, Sector 25, Gurugram. Located near the BSNL office with ample parking available for patients.
          </p>
        </div>
      </section>
    </>
  );
};
