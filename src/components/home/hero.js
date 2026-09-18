"use client";

import React, { useEffect, useRef } from "react";
import Container from "@/components/common/container/container";
import { motion } from "motion/react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const glowRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.15, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 3.5,
          ease: "power3.out",
        }
      )
    }
  )})

  return (
    <section
      ref={heroRef}
      className="hero-section relative flex items-center h-screen overflow-hidden"
    >
      <div ref={bgRef} className="hero-bg"></div>
      <div ref={glowRef} className="hero-glow"></div>

      <Container className="common-container w-full relative z-10">
        <h1>
          {["Growing", "Business", "Digitally"].map((text, index) => (
            <span className="line-wrap" key={text}>
              <motion.span
                className="gradient-text"
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.25,
                  ease: "easeOut",
                }}
              >
                {text}
              </motion.span>
            </span>
          ))}
        </h1>
      </Container>
    </section>
  );
};

export default Hero;