"use client"

import React from 'react'
import Container from "@/components/common/container/container";
import Image from "next/image";
import aboutImage from "@/assets/images/about.png";
import { motion } from "motion/react"


const About = () => {
    return (
        <section className="about-section bg-[#000924]">
            <Container className="common-container w-full">
                <div className="about-content flex flex-col sm:flex-col md:flex-row gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="about-image w-full md:w-1/2">
                        <Image src={aboutImage} alt="About Us" className="w-full h-full object-contain" />
                    </motion.div>
                    <div className="about-text w-full md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="about-heading">Strategy, Creativity & Performance Driven Growth</motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.6 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="about-sub-heading">No fluff. No vanity metrics.</motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.8 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="about-desc">We build high-performance marketing systems that generate leads, drive conversions, and scale revenue consistently. With a senior team and a process built for speed, The Purple Brick Digital crafts brands and websites that feel intentional, perform beautifully, and move fast without compromise.
                        </motion.p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About