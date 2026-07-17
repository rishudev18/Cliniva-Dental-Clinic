import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarCheck, ShieldCheck } from "lucide-react";
import type { Doctor } from "../../constants";
import { Button } from "../ui/button";

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col rounded-3xl border border-border bg-card overflow-hidden shadow-card-custom transition-all hover:shadow-lift"
    >
      {/* Photo Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={doctor.imageUrl}
          alt={doctor.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-103"
          loading="lazy"
        />
        {/* Experience Badge */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm border border-border/40">
          <ShieldCheck className="h-3.5 w-3.5 text-teal" />
          <span>{doctor.experience} Exp</span>
        </div>
      </div>

      {/* Info Content */}
      <div className="flex flex-col flex-1 p-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            {doctor.role}
          </span>
          <h3 className="mt-1 font-display text-xl font-bold text-foreground">
            {doctor.name}
          </h3>
          <p className="text-xs text-muted-foreground font-medium mt-0.5">
            {doctor.credentials}
          </p>
        </div>

        {/* Specializations Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {doctor.specialization.map((spec) => (
            <span
              key={spec}
              className="rounded-lg bg-secondary text-secondary-foreground px-2.5 py-1 text-[10px] font-semibold"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Biography */}
        <p className="mt-4 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {doctor.bio}
        </p>

        {/* Call to Action */}
        <div className="mt-6">
          <Button
            onClick={() => navigate("/book")}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/95 transition-all gap-2"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Consultation
          </Button>
        </div>
      </div>
    </motion.article>
  );
};
