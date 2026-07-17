import React from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CLINIC_INFO } from "../constants";
import { ContactForm } from "../components/contact/ContactForm";

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      title: "Phone & WhatsApp",
      desc: "Call us for bookings, query support, or dental emergencies.",
      val: CLINIC_INFO.phone,
      href: `tel:${CLINIC_INFO.phoneRaw}`,
      icon: Phone,
    },
    {
      title: "Email Support",
      desc: "Reach out for corporate dental plans or business inquiries.",
      val: CLINIC_INFO.email,
      href: `mailto:${CLINIC_INFO.email}`,
      icon: Mail,
    },
    {
      title: "Clinic Location",
      desc: "Jacaranda Marg, Near BSNL, DLF Phase 2, Gurugram, 122002.",
      val: CLINIC_INFO.address,
      href: null,
      icon: MapPin,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Absolute Dental Clinic Gurugram</title>
        <meta
          name="description"
          content="Find Absolute Dental Clinic in Gurugram contact details. View phone, email support, opening hours, and location address map. Fill out the contact form."
        />
        <link rel="canonical" href="https://absolutedental.co.in/contact" />
      </Helmet>

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-28 pb-12 bg-surface border-b border-border/40 select-none">
        <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-50"></div>
        <div className="container-px mx-auto max-w-7xl text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            Get In Touch
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Have questions about dynamic pricing, clinic safety, or teeth straightening? Fill out our form or contact our team directly.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24 text-left">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Details Info */}
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-2xl font-bold md:text-4xl text-foreground">
              We are Here to Help
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Absolute Dental Clinic is dedicated to offering premium care at convenient slots. Contact us during opening hours for immediate consultation requests.
            </p>

            <ul className="flex flex-col gap-6 mt-2">
              {contactDetails.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <li key={idx} className="flex gap-4 items-start border border-border bg-card/40 rounded-2xl p-5 shadow-card-custom backdrop-blur">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal/10 text-teal shrink-0">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <div className="text-sm">
                      <h4 className="font-bold text-foreground leading-none">{detail.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-snug">{detail.desc}</p>
                      {detail.href ? (
                        <a href={detail.href} className="inline-block mt-2.5 font-semibold text-primary hover:text-primary/80 transition-colors">
                          {detail.val}
                        </a>
                      ) : (
                        <p className="mt-2.5 font-medium text-foreground">{detail.val}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Hours card */}
            <div className="flex gap-4 items-start border border-border bg-card/40 rounded-2xl p-5 shadow-card-custom backdrop-blur">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal/10 text-teal shrink-0">
                <Clock className="h-5.5 w-5.5" />
              </span>
              <div className="text-sm">
                <h4 className="font-bold text-foreground leading-none">Opening Hours</h4>
                <div className="flex flex-col gap-1 mt-2.5">
                  {CLINIC_INFO.openingHours.map((oh) => (
                    <div key={oh.days} className="text-xs text-muted-foreground">
                      <span className="font-bold text-foreground">{oh.days}:</span> {oh.hours}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container-px mx-auto max-w-7xl pb-16 md:pb-24">
        <div className="overflow-hidden rounded-2xl border border-border shadow-card-custom h-80 w-full">
          <iframe
            src={CLINIC_INFO.gmapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Absolute Dental Clinic Gurugram Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
