import React from "react";
import { Helmet } from "react-helmet-async";
import { ServiceCard } from "../components/services/ServiceCard";
import { CtaBanner } from "../components/contact/CtaBanner";
import { SERVICES } from "../constants";

export const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Absolute Dental Clinic Gurugram</title>
        <meta
          name="description"
          content="Explore our comprehensive range of premium dental treatments in Gurugram. From dental implants and root canals to smile designing, clear aligners, and family dentistry."
        />
        <link rel="canonical" href="https://absolutedental.co.in/services" />
      </Helmet>

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-28 pb-12 bg-surface border-b border-border/40 select-none">
        <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-50"></div>
        <div className="container-px mx-auto max-w-7xl text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            Treatments & Procedures
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Our Dental <span className="text-gradient">Services</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
            From preventive checks to complex surgical placements and aesthetic makeovers, we provide board-specialist care with advanced digital technology.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
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
