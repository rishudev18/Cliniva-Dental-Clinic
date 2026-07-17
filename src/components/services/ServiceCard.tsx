import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { Service } from "../../constants";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically resolve icon component from lucide-react
  const IconComponent = (LucideIcons as any)[service.iconName];

  return (
    <motion.article
      whileHover={{ y: -5, borderColor: "var(--color-primary-foreground)" }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card-custom transition-shadow hover:shadow-lift"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-primary-foreground shadow-glow-blue">
        {IconComponent ? <IconComponent className="h-5.5 w-5.5" /> : null}
      </span>
      
      <h3 className="mt-5 font-display text-lg font-bold text-foreground">
        {service.title}
      </h3>
      
      <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
        {service.shortDescription}
      </p>
      
      <Link
        to={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
      >
        <span>Learn more</span>
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
};
