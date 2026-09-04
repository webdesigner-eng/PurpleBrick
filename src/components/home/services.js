"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/common/container/container";
import { motion } from "motion/react";

import digitalImg from "@/assets/images/digital-marketing.png";
import designingImg from "@/assets/images/designing.png";
import consultingImg from "@/assets/images/consulting.png";


const services = [
  {
    title: "Digital Marketing",
    desc: "We Design And Execute Data-Driven Campaigns Across Platforms To Generate High-Quality Leads, Increase Conversion, And Maximize ROAS.",
    tags: [
      "Lead Generation",
      "Creative Strategy",
      "SEO Optimization",
      "E-Commerce & D2C Growth",
      "Product-Market Validation",
      "Branding & Positioning",
    ],
    image: digitalImg,
  },
  {
    title: "Designing",
    desc: "We Create High Impact Visuals Help Stand Out & Communicate Clearly. From Ad Creatives & Motion Videos To Brand Communication.",
    tags: [
      "Ad Creative Designing",
      "Motion & Video Editing",
      "Brand Identity Design",
      "Social Media Creatives",
      "Marketing Collaterals",
    ],
    image: designingImg,
  },
  {
    title: "Consulting",
    desc: "We Help Your Business Rank Where It Matters. Through Strategic Keyword Targeting, Technical Optimization, And High-Quality Content.",
    tags: [
      "Performance Diagnostics",
      "Funnel Audits",
      "Marketing Roadmaps",
      "Scaling Strategy",
      "Revenue Optimization",
    ],
    image: consultingImg,
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <Container className="common-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="comn-heading"
        >
          Services Built For Your <span>Growth</span>
        </motion.h2>

        <div className="flex flex-col ">
          {services.map((service, index) => (
            <div className="service-row grid grid-cols-1 md:grid-cols-12 gap-5" key={index}>
              <div className="sm:col-span-3 order-1 md:order-1">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {service.title}
                </motion.h3>
              </div>

              <div className="sm:col-span-5 md:col-span-6 order-3 md:order-3">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {service.desc}
                </motion.p>
                <a href="#">Learn More →</a>

                <h4>Our {service.title} Services</h4>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="sm:col-span-4 md:col-span-3 order-2 md:order-3 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="service-img w-full"
                  width={350}
                  height={350}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;