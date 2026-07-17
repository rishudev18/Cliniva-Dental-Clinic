import React from "react";
import { useNavigate } from "react-router-dom";
import { CalendarCheck, Phone } from "lucide-react";
import { CLINIC_INFO } from "../../constants";
import { Button } from "../ui/button";

export const CtaBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-hero text-primary-foreground py-16 px-6 md:py-20 md:px-12 shadow-glow-blue select-none">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"></div>

      <div className="relative z-10 mx-auto max-w-3xl text-center flex flex-col items-center gap-6">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
          Ready for a Healthy, Confident Smile?
        </h2>
        <p className="max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
          Schedule your personal consultation today or contact our clinical team directly. Let's create your customized dental treatment plan together.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Button
            onClick={() => navigate("/book")}
            size="lg"
            className="bg-white text-primary font-bold shadow-md hover:bg-white/95 transition-all gap-2 h-12 px-8"
          >
            <CalendarCheck className="h-4.5 w-4.5" />
            Book Appointment
          </Button>
          <a href={`tel:${CLINIC_INFO.phoneRaw}`}>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 h-12 px-8 gap-2"
            >
              <Phone className="h-4.5 w-4.5" />
              Call {CLINIC_INFO.phone}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
