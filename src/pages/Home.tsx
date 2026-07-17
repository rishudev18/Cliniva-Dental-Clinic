import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Stethoscope, Microscope, HeartPulse, IndianRupee, ChevronRight, Award, Star } from "lucide-react";
import { Hero } from "../components/hero/Hero";
import { ServiceCard } from "../components/services/ServiceCard";
import { TestimonialCard } from "../components/testimonials/TestimonialCard";
import { BeforeAfterSlider } from "../components/gallery/BeforeAfterSlider";
import { FaqAccordion } from "../components/faq/FaqAccordion";
import { ContactForm } from "../components/contact/ContactForm";
import { SERVICES, TESTIMONIALS, BEFORE_AFTER_ITEMS } from "../constants";
import { getDentistSchema, getLocalBusinessSchema } from "../utils/schema";
import { Button } from "../components/ui/button";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dentistSchema = getDentistSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  const coreFeatures = [
    { label: "Experienced Dental Team", desc: "Dr. Rahul (BDS, MDS) with 15+ years of excellence.", icon: Stethoscope },
    { label: "Modern Equipment", desc: "Digital X-rays, intraoral scanners, CBCT technology.", icon: Microscope },
    { label: "Sterilized Environment", desc: "Strict Class B hospital-grade sterilization protocols.", icon: ShieldCheck },
    { label: "Personalized Care", desc: "Unique customized treatment plans tailored for you.", icon: HeartPulse },
    { label: "Affordable Treatments", desc: "Transparent pricing upfront, zero hidden costs, EMI options.", icon: IndianRupee },
  ];

  return (
    <>
      <Helmet>
        <title>Absolute Dental Clinic - Premium Dental Care in Gurugram</title>
        <meta
          name="description"
          content="Advanced dental implants, smile makeovers, aligners and family dentistry in DLF Phase 2, Gurugram. Trusted by 5000+ patients. Book your appointment today."
        />
        <link rel="canonical" href="https://absolutedental.co.in/" />
        {/* Inject Dentist Schema JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(dentistSchema)}</script>
        {/* Inject Local Business Schema JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* About Us Teaser Section */}
      <section id="about-section" className="container-px mx-auto max-w-7xl pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* About Image Container */}
          <div className="relative select-none">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-teal/10 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
              alt="Modern clinic reception Absolute Dental Clinic"
              className="rounded-3xl border border-border object-cover shadow-card-custom"
              loading="lazy"
            />
          </div>

          {/* About Content */}
          <div className="flex flex-col items-start text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Our Clinic
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl text-foreground">
              Your Trusted <span className="text-gradient">Dental Care Partner</span>
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg leading-relaxed">
              Absolute Dental Clinic delivers premium dental care with modern technology, personalized treatment plans, and a patient-first philosophy. From your first visit, we focus on comfort, hygiene, precision, and long-term oral health.
            </p>
            
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 w-full">
              {coreFeatures.slice(0, 4).map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <li key={idx} className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4 shadow-card-custom backdrop-blur">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal/10 text-teal shrink-0">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-foreground leading-none">{feature.label}</h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-snug">{feature.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <Button
                onClick={() => navigate("/about")}
                variant="outline"
                className="gap-2 border-border bg-card/50 hover:bg-accent"
              >
                Learn more about us
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className="bg-surface py-16 md:py-28 border-y border-border/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center flex flex-col items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Services
            </p>
            <h2 className="font-display text-3xl font-bold md:text-5xl text-foreground">
              Comprehensive Dentistry, <span className="text-gradient">Under One Roof</span>
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              From routine check-ups to advanced implant placement and full-mouth restorations - every treatment is delivered with surgical precision.
            </p>
          </div>

          {/* Top 4 Services Grid */}
          <div className="mt-12 flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory pb-6 sm:pb-0 gap-6 sm:grid-cols-2 lg:grid-cols-4 hide-scrollbar">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="w-[85vw] sm:w-auto shrink-0 snap-center sm:snap-align-none">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={() => navigate("/services")}
              size="lg"
              className="bg-primary text-primary-foreground shadow-glow-blue hover:bg-primary/95 transition-all gap-2 h-11"
            >
              View All Services
              <ChevronRight className="h-4.5 w-4.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-28">
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl font-bold md:text-5xl text-foreground">
            Built On <span className="text-gradient">Trust, Technology & Care</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">
            We hold ourselves to the highest standards of safety, quality, and clinical excellence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-card-custom transition-all duration-300 hover:bg-gradient-to-br hover:from-primary hover:to-teal hover:text-primary-foreground hover:shadow-lift text-left"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-white/15 group-hover:text-primary-foreground">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold transition-colors">
                  {feat.label}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">
                  {feat.desc}
                </p>
              </div>
            );
          })}
          
          {/* Additional Choose Us Item */}
          <div className="group rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-card-custom transition-all duration-300 hover:bg-gradient-to-br hover:from-primary hover:to-teal hover:text-primary-foreground hover:shadow-lift text-left">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-white/15 group-hover:text-primary-foreground">
              <Award className="h-5.5 w-5.5" />
            </span>
            <h3 className="mt-4 font-display text-base font-bold transition-colors">
              Premium Materials
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">
              Zirconia, E-max ceramics, and titanium components backed by structural warranties.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section ends here */}

      {/* Before & After Comparison Section */}
      <section className="bg-surface py-16 md:py-28 border-y border-border/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center flex flex-col items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Smile Transformations
            </p>
            <h2 className="font-display text-3xl font-bold md:text-5xl text-foreground">
              A Clear Path To <span className="text-gradient">Your Best Smile</span>
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Interact with the sliders below to view actual treatment results achieved by our implantologists and orthodontists.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {BEFORE_AFTER_ITEMS.map((item) => (
              <BeforeAfterSlider
                key={item.id}
                beforeUrl={item.beforeUrl}
                afterUrl={item.afterUrl}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Teaser Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-28">
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Patient Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold md:text-5xl text-foreground">
            Loved By <span className="text-gradient">5000+ Smiles</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Read stories of life-changing transformations from our satisfied dental patients.
          </p>
        </div>

        {/* Top 3 Reviews Grid */}
        <div className="mt-12 flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory pb-6 sm:pb-0 gap-8 sm:grid-cols-2 lg:grid-cols-3 hide-scrollbar">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="w-[85vw] sm:w-auto shrink-0 snap-center sm:snap-align-none">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => navigate("/testimonials")}
            variant="outline"
            className="gap-2 border-border bg-card/50 hover:bg-accent"
          >
            Read More Patient Reviews
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Doctor Teaser Section */}
      <section className="bg-surface py-16 md:py-28 border-y border-border/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Doctor Info Left */}
            <div className="flex flex-col items-start text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Meet Your Dentist
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl text-foreground">
                Dr. Rahul, <span className="text-gradient">BDS, MDS</span>
              </h2>
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
                Clinical Director & Chief Implantologist
              </p>
              <p className="mt-5 text-muted-foreground md:text-lg leading-relaxed">
                With over 15 years of clinical excellence and a passion for aesthetic and restorative dentistry, Dr. Rahul has transformed thousands of smiles across Gurugram. He coordinates with certified specialists to deliver the finest care available.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  15+ Years Clinical Experience
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-sm">
                  <Award className="h-4 w-4 text-teal" />
                  Implantology Specialist
                </span>
              </div>

              <div className="mt-8 flex gap-4 w-full">
                <Button
                  onClick={() => navigate("/doctors")}
                  className="w-full lg:w-auto bg-primary text-primary-foreground shadow-glow-blue hover:bg-primary/95 gap-2 h-12"
                >
                  Meet Our Specialist Team
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Doctor Image Right */}
            <div className="flex justify-center select-none order-first lg:order-none mb-6 lg:mb-0">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-2 shadow-lift max-w-sm w-full">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop"
                  alt="Dr. Rahul BDS MDS"
                  className="aspect-[4/5] w-full rounded-[2.2rem] object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-28">
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center gap-3 mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Support FAQ
          </p>
          <h2 className="font-display text-3xl font-bold md:text-5xl text-foreground">
            Answers To <span className="text-gradient">Common Questions</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Got dental queries? Find answers to frequently asked questions about booking, pain, and treatments.
          </p>
        </div>

        <FaqAccordion />
      </section>

      {/* Contact & Booking Section */}
      <section className="bg-surface py-16 md:py-28 border-t border-border/40">
        <div className="container-px mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">
          {/* Text Left */}
          <div className="flex flex-col items-start text-left gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Book Appointment
            </p>
            <h2 className="font-display text-3xl font-bold md:text-5xl text-foreground">
              Book Your Visit <span className="text-gradient">Today</span>
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Take the first step toward a healthier, more confident smile. Request your preferred appointment date and time slot using our form, and our coordinator will contact you immediately to confirm.
            </p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <p>✓ Instant email and SMS slot confirmation</p>
              <p>✓ Minimal waiting times at the clinic</p>
              <p>✓ Easy cancellation and rescheduling</p>
            </div>
          </div>

          {/* Form Right */}
          <div className="flex justify-center w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};
