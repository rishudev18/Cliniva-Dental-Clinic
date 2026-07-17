import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import { CLINIC_INFO } from "../../constants";
import { Button } from "../ui/button";
import logoUrl from "../../assets/logo.png";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Smile Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm h-16 md:h-20"
            : "bg-transparent h-20 md:h-24"
        }`}
      >
        <div className="container-px mx-auto flex h-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logoUrl} 
              alt="Absolute Dental Logo" 
              className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary font-semibold" : "text-foreground/80"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Call and Book Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal/10 text-teal">
                <Phone className="h-4 w-4" />
              </span>
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <Button
              onClick={() => navigate("/book")}
              className="bg-primary text-primary-foreground shadow-glow-blue hover:bg-primary/95 transition-all gap-2"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg lg:hidden"
          >
            <nav className="container-px mx-auto flex flex-col gap-4 py-6 max-w-7xl">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-medium py-3 transition-colors border-b border-border/40 ${
                      isActive ? "text-primary font-semibold" : "text-foreground/80"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex flex-col gap-4 mt-4 pt-2">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="flex items-center gap-3 text-base font-medium text-foreground py-3"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal/10 text-teal">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>{CLINIC_INFO.phone}</span>
                </a>
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/book");
                  }}
                  className="bg-primary text-primary-foreground shadow-glow-blue w-full h-12 justify-center gap-2"
                >
                  <CalendarCheck className="h-5 w-5" />
                  Book Appointment
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
