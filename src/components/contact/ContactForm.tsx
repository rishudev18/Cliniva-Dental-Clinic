import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { Send, CalendarCheck, Loader2 } from "lucide-react";
import { SERVICES } from "../../constants";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

// Validation Schema using Zod
const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address").or(z.literal("")),
  treatment: z.string().min(1, "Please select a treatment"),
  date: z.string().min(1, "Please select a date"),
  timeSlot: z.string().min(1, "Please select a time slot"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      treatment: "",
      date: "",
      timeSlot: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API request (e.g., to Resend or EmailJS)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Appointment Form Submitted Successfully:", data);
      
      toast.success(
        "Appointment Request Submitted! We will contact you shortly to confirm your slot.",
        { duration: 5000 }
      );
      
      reset(); // Clear form inputs
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again or call the clinic.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    "10:00 AM - 11:30 AM",
    "11:30 AM - 01:00 PM",
    "01:00 PM - 02:30 PM",
    "03:00 PM - 04:30 PM",
    "04:30 PM - 06:00 PM",
    "06:00 PM - 07:30 PM",
  ];

  // Disable past dates for booking
  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-border bg-card/85 p-6 md:p-8 shadow-card-custom backdrop-blur w-full flex flex-col gap-5 text-left"
    >
      <div className="flex items-center gap-3 border-b border-border/40 pb-4">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
          <CalendarCheck className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-base font-bold text-foreground">
            Schedule Appointment
          </h3>
          <p className="text-xs text-muted-foreground">
            Takes less than 60 seconds to request
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fullName" className="text-xs font-semibold text-foreground/80">
            Full Name *
          </label>
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            {...register("fullName")}
            className={errors.fullName ? "border-red-500 focus-visible:ring-red-500" : ""}
          />
          {errors.fullName && (
            <span className="text-[10px] font-medium text-red-500">{errors.fullName.message}</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold text-foreground/80">
            Phone Number *
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="9876543210"
            {...register("phone")}
            className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
          />
          {errors.phone && (
            <span className="text-[10px] font-medium text-red-500">{errors.phone.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-foreground/80">
            Email Address (Optional)
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
          />
          {errors.email && (
            <span className="text-[10px] font-medium text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Treatment Type */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="treatment" className="text-xs font-semibold text-foreground/80">
            Treatment / Service *
          </label>
          <select
            id="treatment"
            {...register("treatment")}
            className={`flex h-9 w-full rounded-md border border-input bg-card px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${
              errors.treatment ? "border-red-500" : ""
            }`}
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.treatment && (
            <span className="text-[10px] font-medium text-red-500">{errors.treatment.message}</span>
          )}
        </div>

        {/* Date */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="date" className="text-xs font-semibold text-foreground/80">
            Preferred Date *
          </label>
          <Input
            id="date"
            type="date"
            min={todayStr}
            {...register("date")}
            className={errors.date ? "border-red-500 focus-visible:ring-red-500" : ""}
          />
          {errors.date && (
            <span className="text-[10px] font-medium text-red-500">{errors.date.message}</span>
          )}
        </div>

        {/* Time Slot */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="timeSlot" className="text-xs font-semibold text-foreground/80">
            Preferred Time Slot *
          </label>
          <select
            id="timeSlot"
            {...register("timeSlot")}
            className={`flex h-9 w-full rounded-md border border-input bg-card px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${
              errors.timeSlot ? "border-red-500" : ""
            }`}
          >
            <option value="">Select a time slot...</option>
            {timeSlots.map((ts) => (
              <option key={ts} value={ts}>
                {ts}
              </option>
            ))}
          </select>
          {errors.timeSlot && (
            <span className="text-[10px] font-medium text-red-500">{errors.timeSlot.message}</span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-foreground/80">
          Notes / Medical History (Optional)
        </label>
        <Textarea
          id="message"
          placeholder="E.g., dental pain, past procedures, or scheduling requests..."
          rows={3}
          {...register("message")}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full h-11 bg-primary text-primary-foreground hover:bg-primary/95 transition-all gap-2 justify-center shadow-glow-blue cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting request...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Request
          </>
        )}
      </Button>
    </form>
  );
};
