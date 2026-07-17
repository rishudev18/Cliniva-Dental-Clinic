import React from "react";
import { Helmet } from "react-helmet-async";
import { ContactForm } from "../components/contact/ContactForm";

export const BookAppointment: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Book an Appointment - Absolute Dental Clinic Gurugram</title>
        <meta
          name="description"
          content="Request a clinical consultation or schedule an appointment slot at Absolute Dental Clinic. Quick, verified local dentist bookings in Gurugram."
        />
        <link rel="canonical" href="https://absolutedental.co.in/book" />
      </Helmet>

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-28 pb-12 bg-surface border-b border-border/40 select-none">
        <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-50"></div>
        <div className="container-px mx-auto max-w-7xl text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            Online Booking Portal
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Book an <span className="text-gradient">Appointment</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Choose your desired dental procedure and schedule a convenient date. Our coordinator will contact you immediately to finalize your checkup time.
          </p>
        </div>
      </section>

      {/* Appointment Form Container */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24 flex justify-center">
        <div className="w-full max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
};
