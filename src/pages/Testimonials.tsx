import React from "react";
import { Helmet } from "react-helmet-async";
import { TestimonialCard } from "../components/testimonials/TestimonialCard";
import { CtaBanner } from "../components/contact/CtaBanner";
import { TESTIMONIALS } from "../constants";

export const Testimonials: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Patient Testimonials & Reviews - Absolute Dental Clinic</title>
        <meta
          name="description"
          content="Read verified patient feedback and reviews about our dental implants, smile designs, clear aligners, and root canals in Gurugram. Over 800+ 5-star Google ratings."
        />
        <link rel="canonical" href="https://absolutedental.co.in/testimonials" />
      </Helmet>

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-28 pb-12 bg-surface border-b border-border/40 select-none">
        <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-50"></div>
        <div className="container-px mx-auto max-w-7xl text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            Patient Feedback
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Our <span className="text-gradient">Testimonials</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Discover how we deliver comfortable, pain-free dental checkups and life-changing smile makeovers directly from our patient reviews.
          </p>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
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
