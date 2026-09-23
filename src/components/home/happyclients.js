"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/common/container/container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HDB from "@/assets/images/clients-img/hdb.png";
import Kidex from "@/assets/images/clients-img/kidex.png";
import Samarth from "@/assets/images/clients-img/samarth.png";
import Emami from "@/assets/images/clients-img/emami.png";
import Zandu from "@/assets/images/clients-img/zandu.png";
import Powerplay from "@/assets/images/clients-img/powerplay.png";
import Alpex from "@/assets/images/clients-img/alpex.png";
import Root from "@/assets/images/clients-img/rootdeep.png";
import Taj from "@/assets/images/clients-img/taj.png";
import Cars24 from "@/assets/images/clients-img/cars24.png";
import Sherpulse from "@/assets/images/clients-img/sherpulse.png";



gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: "HDB", logo: HDB },
  { name: "Kidex", logo: Kidex },
  { name: "Samarth Eldercare", logo: Samarth },
  { name: "Emami", logo: Emami },
  { name: "Zandu", logo: Zandu },
  { name: "Powerplay", logo: Powerplay },
  { name: "Alpex Solar", logo: Alpex },
  { name: "Root Deep", logo: Root },
  { name: "TAJ", logo: Taj },
  { name: "Cars24", logo: Cars24 },
  { name: "Sherpulse", logo: Sherpulse },
];

const HappyClients = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".clients-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 18,
        ease: "none",
        repeat: -1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play pause resume pause",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="happy-clients-section bg-black py-12 overflow-hidden">
      <Container className="common-container">
        <h2 className="comn-heading mb-10 text-center text-white">
          Our Happy Clients
        </h2>

        <div className="clients-slider overflow-visible w-full">
          <div ref={trackRef} className="clients-track flex items-center gap-5 w-max">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="client-logo flex items-center justify-center w-[100px] h-[100px] rounded-full bg-white shrink-0"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HappyClients;
