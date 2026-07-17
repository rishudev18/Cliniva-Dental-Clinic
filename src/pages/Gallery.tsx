import React from "react";
import { Helmet } from "react-helmet-async";
import { GalleryGrid } from "../components/gallery/GalleryGrid";
import { BeforeAfterSlider } from "../components/gallery/BeforeAfterSlider";
import { CtaBanner } from "../components/contact/CtaBanner";
import { BEFORE_AFTER_ITEMS } from "../constants";

export const Gallery: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Smile Gallery & Clinic Tour - Absolute Dental Clinic</title>
        <meta
          name="description"
          content="View our smile transformation portfolio and browse photos of our state-of-the-art clinic operatory rooms, sterilization tools, and technology in Gurugram."
        />
        <link rel="canonical" href="https://absolutedental.co.in/gallery" />
      </Helmet>

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-28 pb-12 bg-surface border-b border-border/40 select-none">
        <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-50"></div>
        <div className="container-px mx-auto max-w-7xl text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            Smile Transformations & Tour
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Our <span className="text-gradient">Smile Gallery</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Take a visual tour of our sterilization facilities and advanced diagnostics tools, and review real treatment before-and-after results.
          </p>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24 border-b border-border/40 text-left">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-3">
          <h2 className="font-display text-2xl font-bold md:text-4xl text-foreground">
            Before & After Case Studies
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Interact with the slides by dragging the middle handle to reveal before-and-after clinical comparisons for our patients.
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
      </section>

      {/* masonry filter gallery section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24 text-left">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-3 mb-10">
          <h2 className="font-display text-2xl font-bold md:text-4xl text-foreground">
            Explore Our Clinic
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Filter photos by Category to explore our diagnostic equipment, reception lounge, and clinical treatment setups.
          </p>
        </div>

        <GalleryGrid />
      </section>

      {/* CTA Section */}
      <div className="container-px mx-auto max-w-7xl pb-20 md:pb-28">
        <CtaBanner />
      </div>
    </>
  );
};
