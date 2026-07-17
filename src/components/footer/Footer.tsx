import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { CLINIC_INFO, SERVICES } from "../../constants";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Doctors", path: "/doctors" },
    { name: "Smile Gallery", path: "/gallery" },
    { name: "Patient Testimonials", path: "/testimonials" },
    { name: "Blog / Dental Guides", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Clinic Brand & Socials */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-foreground shadow-glow-blue">
                <span className="font-sans font-bold text-lg text-background">A</span>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight md:text-xl text-foreground">
                Absolute <span className="text-gradient">Dental</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Delivering premium dental care in Gurugram with world-class technology, sterilization protocols, and customized treatment plans.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={CLINIC_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href={CLINIC_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href={CLINIC_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href={CLINIC_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-foreground">
              Our Treatments
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-foreground">
              Contact & Hours
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2.5 items-start text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex gap-2.5 items-center text-sm text-muted-foreground">
                <Phone className="h-4.5 w-4.5 text-teal shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-primary transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex gap-2.5 items-center text-sm text-muted-foreground">
                <Mail className="h-4.5 w-4.5 text-teal shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-primary transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </li>
              <li className="flex gap-2.5 items-start text-sm text-muted-foreground mt-1 border-t border-border/40 pt-3">
                <Clock className="h-4.5 w-4.5 text-teal shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {CLINIC_INFO.openingHours.map((oh) => (
                    <div key={oh.days} className="text-xs">
                      <span className="font-medium text-foreground">{oh.days}:</span> {oh.hours}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Frame & Bottom Row */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {currentYear} {CLINIC_INFO.name}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
