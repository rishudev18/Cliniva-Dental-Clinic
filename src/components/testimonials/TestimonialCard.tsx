import React from "react";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "../../constants";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card-custom transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-8">
      {/* Decorative Quote Icon */}
      <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/8 transition-transform group-hover:scale-105" />

      {/* Profile Header */}
      <div className="flex items-center gap-3.5">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-hero font-display text-sm font-extrabold text-primary-foreground shadow-sm">
          {testimonial.avatarText}
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-foreground">
            {testimonial.name}
          </h4>
          <p className="text-[11px] font-semibold text-muted-foreground">
            {testimonial.treatment}
          </p>
        </div>
      </div>

      {/* Stars Row */}
      <div className="mt-4.5 flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Review Text */}
      <p className="mt-4 flex-1 text-sm text-muted-foreground leading-relaxed italic">
        "{testimonial.text}"
      </p>
    </article>
  );
};
