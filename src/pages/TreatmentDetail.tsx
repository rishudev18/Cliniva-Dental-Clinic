import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, CheckCircle2, HelpCircle, BadgeInfo, CalendarCheck } from "lucide-react";
import { SERVICES } from "../constants";
import { getServiceSchema, getFAQPageSchema } from "../utils/schema";
import { Button } from "../components/ui/button";

export const TreatmentDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find corresponding service
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container-px mx-auto max-w-lg py-32 text-center flex flex-col items-center gap-4">
        <h1 className="font-display text-2xl font-bold">Treatment Not Found</h1>
        <p className="text-muted-foreground text-sm">
          We couldn't find the specific dental treatment you are looking for. Please browse our full services directory.
        </p>
        <Link to="/services">
          <Button className="bg-primary text-primary-foreground gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  // Generate Schemas
  const serviceSchema = getServiceSchema(service);
  const faqSchema = getFAQPageSchema(service.faqs);

  return (
    <>
      <Helmet>
        <title>{`${service.title} Treatment in Gurugram - Absolute Dental Clinic`}</title>
        <meta name="description" content={service.shortDescription} />
        <link rel="canonical" href={`https://absolutedental.co.in/services/${service.slug}`} />
        {/* Inject Service Schema */}
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        {/* Inject FAQPage Schema */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-28 pb-12 bg-surface border-b border-border/40 text-left select-none">
        <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-50"></div>
        <div className="container-px mx-auto max-w-7xl flex flex-col gap-3">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            All Treatments
          </Link>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl mt-2">
            {service.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Core details grid */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24 text-left">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Info Columns */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Key Benefits */}
            <div>
              <h2 className="font-display text-xl font-bold text-foreground border-b border-border/40 pb-3">
                Key Benefits of the Treatment
              </h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-4.5 w-4.5 text-teal shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment Procedure Step-by-Step */}
            <div>
              <h2 className="font-display text-xl font-bold text-foreground border-b border-border/40 pb-3">
                Procedure Timeline: What to Expect
              </h2>
              <ol className="mt-6 flex flex-col gap-5">
                {service.procedure.map((step, idx) => {
                  const parts = step.split(":");
                  const stepTitle = parts[0];
                  const stepDesc = parts.slice(1).join(":");
                  return (
                    <li key={idx} className="flex gap-4">
                      <div className="grid h-7 w-7 place-items-center rounded-full bg-teal/10 font-sans text-xs font-bold text-teal shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="text-sm">
                        <h4 className="font-bold text-foreground leading-tight">{stepTitle}</h4>
                        {stepDesc && <p className="text-muted-foreground mt-1 leading-relaxed">{stepDesc.trim()}</p>}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* Sidebar Cards */}
          <div className="flex flex-col gap-6">
            {/* Price Info Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card-custom flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <BadgeInfo className="h-4.5 w-4.5" />
                <span>Estimated Pricing</span>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Estimated treatment cost:</span>
                <p className="text-2xl font-extrabold text-foreground mt-1 font-display">
                  {service.priceRange}
                </p>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                * Final cost is determined after dynamic clinical examination and 3D CBCT diagnostic planning.
              </p>
            </div>

            {/* Action CTA Sidebar Card */}
            <div className="rounded-2xl border border-border bg-gradient-hero text-primary-foreground p-6 shadow-lift flex flex-col gap-5 select-none">
              <h3 className="font-display text-lg font-bold text-white">
                Book {service.title} consultation
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Need details about this procedure? Speak directly with Dr. Rahul. Request your consultation date today.
              </p>
              <Button
                onClick={() => navigate("/book")}
                className="w-full bg-white text-primary font-bold hover:bg-white/95 gap-2 h-11"
              >
                <CalendarCheck className="h-4.5 w-4.5" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service specific FAQs Section */}
      <section className="bg-surface border-t border-border/40 py-16 md:py-24 text-left">
        <div className="container-px mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col gap-2">
            <h2 className="font-display text-2xl font-bold md:text-4xl text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-muted-foreground">
              Find answers to common questions about our {service.title} procedures.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-card p-5 shadow-card-custom flex gap-3.5 items-start">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal/10 text-teal shrink-0 mt-0.5">
                  <HelpCircle className="h-4.5 w-4.5" />
                </span>
                <div className="text-sm">
                  <h4 className="font-bold text-foreground leading-snug">{faq.question}</h4>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
