import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { GALLERY_ITEMS } from "../../constants";

export const GalleryGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'clinic' | 'treatment' | 'technology'>('all');

  const filterCategories = [
    { label: "All Photos", value: "all" },
    { label: "Clinic", value: "clinic" },
    { label: "Treatments", value: "treatment" },
    { label: "Technology", value: "technology" },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Filters Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {filterCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveFilter(cat.value as any)}
            className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-200 border cursor-pointer ${
              activeFilter === cat.value
                ? "bg-primary text-primary-foreground border-primary shadow-glow-blue"
                : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-card-custom select-none"
            >
              {/* Photo */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5">
                <span className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-lg bg-white/20 text-white backdrop-blur">
                  <Maximize2 className="h-4 w-4" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white mt-1 leading-snug">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
