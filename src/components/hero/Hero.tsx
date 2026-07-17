import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarCheck, Phone, Users, Award, Microscope, Syringe, Smile, Sparkles, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { CLINIC_INFO } from "../../constants";
import { Button } from "../ui/button";

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Create GSAP animation context for scoping selectors
    const ctx = gsap.context(() => {
      // Reveal items
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-tag", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(".hero-text", { y: 20, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(".hero-ctas", { y: 20, opacity: 0, duration: 0.5 }, "-=0.4")
        .from(".hero-stat-card", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.3")
        .from(".hero-image-container", { scale: 0.95, opacity: 0, duration: 1.2 }, "-=1")
        .from(".hero-rating-tag", { y: 20, opacity: 0, duration: 0.6 }, "-=0.8")
        .from(".hero-scroll-btn", { y: -10, opacity: 0, repeat: -1, yoyo: true, duration: 1 }, "-=0.5");

      // Floating animation for the image card
      gsap.to(".hero-floating-card", {
        y: -10,
        rotation: 0.5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert(); // clean up GSAP animations on unmount
  }, []);

  const stats = [
    { label: "Happy Patients", val: "5000+", icon: Users },
    { label: "Advanced Tech", val: "Digital Scan", icon: Microscope },
    { label: "Specialists", val: "BDS, MDS", icon: Award },
    { label: "Comfort Care", val: "Pain-Free", icon: Syringe },
  ];

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-28 pb-8 md:pt-36 lg:pt-40 lg:pb-12 min-h-screen flex flex-col justify-between"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-80"></div>

      <div className="container-px mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">
        {/* Hero Left Content */}
        <div className="flex flex-col items-start text-left">
          {/* Subheading Tag */}
          <span className="hero-tag inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold text-foreground shadow-card-custom">
            <Sparkles className="h-3.5 w-3.5 text-teal" />
            {CLINIC_INFO.tagline}
          </span>

          {/* Heading */}
          <h1 className="hero-title mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Advanced Dental Care
          </h1>

          {/* Description */}
          <p className="hero-text mt-5 max-w-xl text-base text-muted-foreground md:text-lg leading-relaxed">
            Expert dental treatments, implants, smile makeovers & family dentistry in Gurugram - delivered with world-class technology and unmatched personal care.
          </p>

          {/* Action Buttons */}
          <div className="hero-ctas mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              onClick={() => navigate("/book")}
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground shadow-glow-blue hover:bg-primary/95 transition-all gap-2 h-12 px-8"
            >
              <CalendarCheck className="h-4.5 w-4.5" />
              Book Appointment
            </Button>
            <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-border bg-card/60 backdrop-blur hover:bg-accent hover:text-accent-foreground h-12 px-8 gap-2"
              >
                <Phone className="h-4.5 w-4.5 text-teal" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Stats Cards Grid */}
          <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 w-full">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="hero-stat-card rounded-2xl border border-border bg-card/70 p-4 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
                >
                  <Icon className="h-5 w-5 text-teal" />
                  <dt className="mt-2 font-display text-base font-semibold text-foreground md:text-lg leading-none">
                    {stat.val}
                  </dt>
                  <dd className="text-xs text-muted-foreground mt-1.5 leading-none">
                    {stat.label}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        {/* Hero Right Image Graphic */}
        <div className="hero-image-container relative flex justify-center lg:justify-end">
          {/* Background Decorative Blob */}
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-hero opacity-15 blur-3xl animate-pulse"></div>

          {/* Main Floating Image Card */}
          <div className="hero-floating-card overflow-hidden rounded-[2.5rem] border border-border bg-card p-2 shadow-lift max-w-lg w-full">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
              alt="Premium dental care patient care"
              className="aspect-[4/3] w-full rounded-[2.2rem] object-cover"
              loading="eager"
            />
          </div>

          {/* Rating Card Overlay */}
          <div className="hero-rating-tag absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-card p-4 shadow-lift md:flex md:items-center md:gap-3 transition-transform hover:scale-105">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-primary-foreground shadow-glow-blue">
              <Smile className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-sm font-bold">4.9 / 5 rating</p>
              <p className="text-[11px] text-muted-foreground">From 800+ Google reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Down Indicator */}
      <a
        href="#about-section"
        className="hero-scroll-btn mx-auto mt-12 hidden h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground md:grid hover:bg-accent hover:text-accent-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
};
