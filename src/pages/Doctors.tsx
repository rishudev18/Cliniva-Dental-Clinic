import React from "react";
import { Helmet } from "react-helmet-async";
import { DoctorCard } from "../components/doctors/DoctorCard";
import { CtaBanner } from "../components/contact/CtaBanner";
import { DOCTORS } from "../constants";

export const Doctors: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Doctors - Absolute Dental Clinic Gurugram</title>
        <meta
          name="description"
          content="Meet our clinical team of certified dental specialists in Gurugram. Led by Dr. Rahul, our board-certified experts cover implantology, orthodontics, endodontics, and pedodontics."
        />
        <link rel="canonical" href="https://absolutedental.co.in/doctors" />
      </Helmet>

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-28 pb-12 bg-surface border-b border-border/40 select-none">
        <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-50"></div>
        <div className="container-px mx-auto max-w-7xl text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            Our Specialist Team
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Meet Our <span className="text-gradient">Dentists</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Clinical excellence is our hallmark. Our team consists of qualified specialists with extensive experience in implantology, endodontics, orthodontics, and pedodontics.
          </p>
        </div>
      </section>

      {/* Doctors Grid Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="container-px mx-auto max-w-7xl pb-20 md:pb-28">
        <CtaBanner />
      </div>
    </>
  );
};
