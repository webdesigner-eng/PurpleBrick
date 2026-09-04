"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/container/container";
import Link from "next/link";
import HDB from "@/assets/images/clients-img/hdb.png";
import Zandu from "@/assets/images/clients-img/zandu.png";
import Powerplay from "@/assets/images/clients-img/powerplay.png";
import Alpex from "@/assets/images/clients-img/alpex.png";
import alpexImg from "@/assets/images/alpex-img.png";
import hdbImg from "@/assets/images/HDB-img.png"
import powerPlay from "@/assets/images/powerplay-img.png"
import zanduImg from "@/assets/images/Zandu-img.png"


const caseStudies = [
    {
        logo: Zandu,
        title: "Zandu",
        desc: "Focused on holistic well-being through safe, herbal remedies. Combines traditional Ayurvedic knowledge with modern science to create effective products.",
        services: ["Meta Ads", "Creative Designing", "Content Creation"],
        image: zanduImg,
        traffic: "+340%",
        leads: "+180%",
        trafficDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        leadsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        bg: "#1A3D2F",
        link: "",
    },
    {
        logo: HDB,
        title: "HDB",
        desc: "Purple Brick Digital combines strategic thinking with creative precision to help ambitious teams translate who they are into brands people can feel.",
        services: ["Social Media", "Meta Ads", "Creative Designing", "Content Creation"],
        image: hdbImg,
        traffic: "+340%",
        leads: "+180%",
        trafficDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        leadsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        bg: "#21376C",
        link: "",
    },
    {
        logo: Alpex,
        title: "Alpex",
        desc: "A leading solar panel manufacturer. It delivers reliable, sustainable power solutions for residential, commercial, and industrial needs.",
        services: ["Google Ads", "Meta Ads", "SEO", "Web Designing", "Creative Designing", "Content Creation"],
        image: alpexImg,
        traffic: "+340%",
        leads: "+180%",
        trafficDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        leadsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        bg: "#3E567D",
        link: "",
    },
    {
        logo: Powerplay,
        title: "Powerplay",
        desc: "AEO tool to see what AI is saying about your brand, discover improvement opportunities, and take action before anyone else.",
        services: ["Google Ads", "Meta Ads", "App Marketing", "Play/App Store Optimization", "Web Designing"],
        image: powerPlay,
        traffic: "+340%",
        leads: "+180%",
        trafficDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        leadsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        bg: "#5A7AF7",
        link: "",
    },
];

const CaseStudies = () => {
    const [activeIndex, setActiveIndex] = useState();

    return (
        <section className="bg-[#000] w-full case-studies-section">
            <div className="w-full">
                {caseStudies.map((item, index) => (
                    <div
                        key={item.title}
                        onMouseEnter={() => setActiveIndex(index)}
                        style={{
                            backgroundColor: activeIndex === index ? item.bg : "#000",
                        }}
                        className="group border-b border-[#707071] last:border-b-0 transition-all duration-500"
                    >
                        <Container className="common-container w-full">
                            <div className="sm:grid grid-cols-12 gap-8 pt-10 pb-10 items-start hidden desktop-case-studies">
                                <div className="col-span-4">
                                    <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
                                        <Image
                                            src={item.logo}
                                            alt={item.title}
                                            width={100}
                                            height={100}
                                            className="object-contain"
                                        />
                                    </div>

                                    {activeIndex === index && (
                                        <Link href="/" className="mt-8 inline-block learn-more-btn border-b border-white pb-2">
                                            Learn More <span className="ml-6">→</span>
                                        </Link>
                                    )}
                                </div>

                                <div className="col-span-6">
                                    <p className="casestudy-text leading-relaxed max-w-[360px]">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="col-span-2">
                                    <ul className="casestudy-text leading-relaxed">
                                        {item.services.map((service) => (
                                            <li key={service}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="sm:hidden overflow-hidden py-8 px-8 my-8 border rounded-xl mobile-case-studies" style={{ backgroundColor: item.bg }}>
                                <div className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center mb-5">
                                    <Image
                                        src={item.logo}
                                        alt={item.title}
                                        width={70}
                                        height={70}
                                        className="object-contain"
                                    />
                                </div>

                                <ul className="casestudy-text mb-5">
                                    {item.services.map((service) => (
                                        <li key={service}>{service}</li>
                                    ))}
                                </ul>

                                <div className="bg-white rounded-xl overflow-hidden mb-5">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                <Link
                                    href="/"
                                    className="inline-flex items-center learn-more-btn border-b border-white pb-2 "
                                >
                                    Learn More
                                    <span className="ml-4">→</span>
                                </Link>
                            </div>
                        </Container>

                        <Container
                            className={`overflow-hidden transition-all w-full common-container duration-500 ${activeIndex === index
                                ? "max-h-[350px] opacity-100"
                                : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="sm:grid grid-cols-12 gap-6 pb-20 hidden">
                                <div className="col-span-6">
                                    <div className="bg-white rounded-xl overflow-hidden max-h-[300px]">
                                        <Image
                                            src={item.image || "/images/case-studies/default-case.png"}
                                            alt={item.title}
                                            width={500}
                                            height={280}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-3 bg-white rounded-lg p-8">
                                    <h3 className="traffic-no font-bold">
                                        {item.traffic || "+250%"}
                                    </h3>
                                    <p className="traffic-text font-bold text-center">Traffic</p>
                                    <p className="traffic-desc mt-3">
                                        {item.trafficDesc}
                                    </p>
                                </div>

                                <div className="col-span-3 bg-white rounded-lg p-8">
                                    <h3 className="leads-no font-bold">
                                        {item.leads || "+120%"}
                                    </h3>
                                    <p className="leads-text font-bold text-center">Leads</p>
                                    <p className="leads-desc mt-3">
                                        {item.leadsDesc}
                                    </p>
                                </div>
                            </div>

                        </Container>
                    </div>
                ))}

                <Container className="common-container">
                    <div className="flex justify-center  gap-8 sm:gap-14 py-14">
                        <Link href="/" className="inline-block learn-more-btn border-b border-white pb-2">
                            View Other Case Studies <span className="sm-ml-6 ml-3">→</span>
                        </Link>
                        <Link href="/" className="inline-block learn-more-btn border-b border-white pb-2">
                            What Our Clients Have To Say <span className="sm-ml-6 ml-3">→</span>
                        </Link>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default CaseStudies;