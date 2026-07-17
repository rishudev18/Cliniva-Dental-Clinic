import React from "react";
import { FAQS } from "../../constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const FaqAccordion: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
      {/* Accordion List */}
      {FAQS.length > 0 ? (
        <Accordion className="w-full space-y-3">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="border border-border bg-card/65 rounded-xl px-4 md:px-5 py-1 md:py-2 shadow-card-custom transition-all hover:bg-card/90"
            >
              <AccordionTrigger className="text-base font-semibold text-foreground py-4 md:py-3 text-left leading-snug hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2 pb-3">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center py-10 text-muted-foreground text-sm border border-dashed border-border rounded-2xl bg-card/40">
          No FAQs match your search query. Try another keyword!
        </div>
      )}
    </div>
  );
};
