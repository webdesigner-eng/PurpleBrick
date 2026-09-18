"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Container from "@/components/common/container/container";
import FormBg from "@/assets/images/form-bg-img.png"

const auditSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().min(10, "email is required"),
  brandName: z.string().min(2, "Brand name is required"),
  message: z.string().min(5, "Message is required"),
});

const AuditForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(auditSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/audit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      setSuccess("Thank you! Your request has been submitted.");
      reset();
    }

    setLoading(false);
  };

  return (
    <section className="audit-form-section relative bg-black pt-0 overflow-hidden">
      <Container className="common-container">
        <h2 className="audit-form-heading text-center mb-8 sm-mb-12">
          Turn Your Marketing Into A Scalable Growth Engine
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[860px] mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="audit-label">Full Name *</label>
              <input
                {...register("fullName")}
                placeholder="Enter Your Full Name"
                className="w-full rounded-md px-4 py-4 mt-2 outline-none"
              />
              <p className="audit-error">{errors.fullName?.message}</p>
            </div>

            <div>
              <label className="audit-label">Phone Number *</label>
              <input
                {...register("phone")}
                placeholder="Enter Your Phone Number"
                className="w-full rounded-md px-4 py-4 mt-2 outline-none"
              />
              <p className="audit-error">{errors.phone?.message}</p>
            </div>

            <div>
              <label className="audit-label">Email Address *</label>
              <input
                {...register("email")}
                placeholder="Enter Your Email Address"
                className="w-full rounded-md px-4 py-4 mt-2 outline-none"
              />
              <p className="audit-error">{errors.email?.message}</p>
            </div>

            <div>
              <label className="audit-label">Website/Brand Name *</label>
              <input
                {...register("brandName")}
                placeholder="Enter Your Brand Name"
                className="w-full rounded-md px-4 py-4 mt-2 outline-none"
              />
              <p className="audit-error">{errors.brandName?.message}</p>
            </div>
          </div>

          <div className="mt-6">
            <label className="audit-label">Your Message *</label>
            <textarea
              {...register("message")}
              placeholder="Your Message"
              rows="4"
              className="w-full rounded-md px-4 py-4 mt-2 outline-none resize-none"
            />
            <p className="audit-error">{errors.message?.message}</p>
          </div>

          <div className="text-center mt-10">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#5A7AF7] to-[#BA41F6] text-white font-bold sm-px-8 px-4 py-2 sm-py-4 rounded-full disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Get Free Audit"}
            </button>
          </div>

          {success && (
            <p className="audit-success text-center mt-5">{success}</p>
          )}
        </form>
      </Container>

      <div className="absolute bottom-0 left-0 w-full h-[220px] bg-[url('/images/form-wave.png')] bg-cover bg-bottom opacity-80"></div>
    </section>
  );
};

export default AuditForm;