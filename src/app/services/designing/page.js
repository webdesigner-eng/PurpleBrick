"use client";

import Container from "@/components/common/container/container";
import Link from "next/link";
import Image from "next/image";
import pillar1 from "@/assets/images/service-img/pillar1.jpg";
import pillar2 from "@/assets/images/service-img/pillar2.jpg";
import hero1 from "@/assets/images/service-img/designing-hero1.jpg";
import hero0 from "@/assets/images/service-img/designing-hero0.jpg";
import hero2 from "@/assets/images/service-img/designing-hero2.jpg";
import Linkbtn from "@/components/ui/button/Linkbtn";
import { ServiceHero, ServicePillars } from "@/components/services/ServicePageSections";
import Tools from "@/components/home/tools";


const softwareToolsData = {
  "Design & Layout": [
    {
      name: "Adobe Photoshop",
      color: "bg-[#31a8ff]",
    },
    {
      name: "Adobe Illustrator",
      color: "bg-[#ff9a00]",
    },
    {
      name: "Figma",
      color: "bg-[#f24e1e]",
    },
    {
      name: "Canva Pro",
      color: "bg-[#00c4cc]",
    },
    {
      name: "Google Slides",
      color: "bg-[#34a853]",
    },
  ],

  "Video & Motion": [
    {
      name: "Adobe Premiere Pro",
      color: "bg-purple-500",
    },
    {
      name: "After Effects",
      color: "bg-purple-600",
    },
    {
      name: "DaVinci Resolve",
      color: "bg-blue-500",
    },
    {
      name: "CapCut",
      color: "bg-black",
    },
  ],

  "AI Creative Tools": [
    {
      name: "Kling AI",
      color: "bg-purple-500",
    },
    {
      name: "Claude",
      color: "bg-orange-500",
    },
    {
      name: "Google Labs",
      color: "bg-blue-500",
    },
    {
      name: "Adobe Firefly",
      color: "bg-red-500",
    },
    {
      name: "ChatGPT",
      color: "bg-green-500",
    },
  ],
};

const servicePillars = [
  {
    number: "01",
    name: "Brand & Identity",
    title: "Systems that make a brand recognizable",
    description:
      "Complete brand systems — logo, typography, color palette, and usage guidelines — plus packaging that stands out on the shelf and tells your story before a customer reads a word.",
    tags: ["Brand Identity Design", "Logo Design", "Packaging Design"],
    image: pillar1,
  },
  {
    number: "02",
    name: "Performance Creative",
    title: "Visuals built to earn the click",
    description:
      "Scroll-stopping visuals for Meta, Google, and programmatic ads, on-brand social posts and carousels, plus brochures and print-ready collaterals that convert in the real world as much as online.",
    tags: ["Marketing Collaterals", "Ad Creative Designing", "Social Media Creatives"],
    image: pillar2,
  },
  {
    number: "03",
    name: "Motion & Digital Product",
    title: "Where design meets the interface",
    description:
      "Short-form reels and brand films edited for retention, investor decks structured to make your argument land, and clean website UI that balances visual quality with usability.",
    tags: ["Motion & Video Editing", "Presentation Design", "Website UI Design"],
    image: pillar1,
  },
];

const projects = [
  ["F", "Farmery", "D2C Food & Dairy Brand · Ad Creatives & Social Media"],
  ["H", "HDB Financial Services", "Financial Services · Campaign Ad Creatives"],
  ["A", "Alpex Solar", "Solar Manufacturing (B2B) · Brand & Social Media Creatives"],
];

const websites = [
  ["bidmysolar.com.au", "BidMySolar Australia", "Australia’s most trusted solar search engine"],
  ["krishnanetralaya.com", "Krishna Netralaya Eye Care", "Advanced eye hospital in Gurgaon"],
  ["spacecraft-homes.com", "Space | Craft Homes", "Seattle home renovation & custom builders"],
];

const process = [
  ["01", "Brief & Discovery", "We start by understanding your brand, target audience, objective, platform, and competition — before any design work begins."],
  ["02", "Concept & Direction", "We present initial visual concepts and directions, and get your sign-off before production starts."],
  ["03", "Design & Refinement", "Full production with feedback rounds built in. We iterate until it’s right, not until the revision limit runs out."],
  ["04", "Final Delivery", "Organized files, final assets, and brand guidelines handed over in every format your team needs."],
];

const team = [
  ["F", "Firoz", "Creative Director"],
  ["A", "Alok", "Senior Video Editor & Designer"],
  ["M", "Manish", "Designer"],
  ["K", "Kamil", "Video Editor"],
  ["C", "Chesta", "Design Coordinator"],
];

const servicePage = {
  hero: {
    eyebrow: "Strategy-Backed Creative Design",
    title: "Design That Stops the Scroll.",
    highlight: "Creatives That Convert.",
    description: "We create high-impact visuals that help your brand stand out and communicate clearly. From ad creatives and motion videos to brand identity — every design is crafted with strategy, consistency, and performance in mind.",
    stats: [["200+", "Creatives Per Month"], ["9", "Design Services"], ["7", "Websites Designed"]],
    images: [hero0, hero1, hero2],
  },
  pillars: {
    title: "Nine Design Services.",
    description: "Every format, every platform, every brief — handled by specialists who understand both aesthetics and performance.",
    items: servicePillars,
  },
};

export default function DesigningServicePage() {
  return (
    <main className="designing-page overflow-hidden bg-[#050719] text-white">
      <ServiceHero content={servicePage.hero} />
      <ServicePillars {...servicePage.pillars} pillars={servicePage.pillars.items} />
      <Tools
        title={
          <>
            The Software We{" "}
            <span className="text-[#ba41f6]">Work With Every Day</span>
          </>
        }
        subtitle="Industry-standard tools, combined with the latest AI creative stack — so we're fast without being generic."
        tabsData={softwareToolsData}
        defaultActiveTab="Design & Layout"
        eyebrow="Our Toolkit"
        displayMode="chips"
        sectionClassName="bg-white px-3 py-[60px] sm:py-20"
        containerClassName="common-container flex w-full max-w-[1240px] flex-col items-center px-0 text-center"
      />

      <section id="work" className="designing-dark-section px-3 py-20 sm:py-28">
        <Container className="common-container">
          <div>
            <p className="designing-kicker text-center text-[#74f3cd]">Our Work</p>
            <h2 className="text-center mb-4">Creative Work Across <span>Industries</span></h2>
            <p className="mt-5 text-center text-[#abb0c6]">A selection of ad creatives and brand communication produced for our clients.</p>
            <div className="designing-case-list">{projects.map(([initial, title, description], index) => 
              <article className="designing-case" key={title}>
                <div className="designing-case-heading">
                  <b className={`designing-case-badge badge-${initial}`}>{initial}</b>
                  <div><h3>{title}</h3><p>{description}</p>
                 </div>
              </div>
              <div className="designing-case-images"><img src={`/designing/${index === 0 ? "farmery" : index === 1 ? "hdb" : "alpex"}-1.png`} alt={`${title} campaign`} />
              <img src={`/designing/${index === 0 ? "farmery" : index === 1 ? "hdb" : "alpex"}-2.png`} alt={`${title} campaign`} />
              </div>
              </article>)}
              </div>
          </div>
        </Container>
      </section>

      <section className="designing-light-section px-3 py-20 sm:py-28">
        <Container className="common-container">
          <p className="designing-kicker text-center">Website Design</p>
          <h2 className="text-center mb-4">Websites We&apos;ve Designed <span>& Built</span></h2>
          <p className="mt-5 m-auto max-w-3xl text-[#5b5b67] text-center">
            Clean, conversion-focused web design across industries and geographies — from clinics and service businesses to agencies and solar manufacturers.</p>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">{websites.map(([url, title, description]) => 
            <article className="designing-site-card" key={url}><div className="designing-browser">
              <div className="flex gap-1"><i /><i /><i /></div><span>{url}</span></div>
              <div className="designing-site-preview"><strong>{title}</strong>
              <p>{description}</p><button>Get Started Free</button>
              </div><h3>{title}</h3><a href="#work">{url} ↗</a></article>)}
              </div>
        </Container>
      </section>

      <section className="designing-dark-section px-3 py-20 sm:py-28">
        <Container className="common-container">
          <p className="designing-kicker text-[#74f3cd]">How We Work</p>
          <h2 className="mb-4">No File Goes Into Production Until <span>Everyone&apos;s Aligned</span></h2>
          <p className="mt-5 max-w-2xl leading-7 text-[#abb0c6]">Four phases. Senior oversight at every stage. Built around your brief, not our templates.</p>
          <div className="designing-processes mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{process.map(([number, title, description]) => 
            <article className="designing-process-card " key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>)}
          </div>
          <div className="mt-28 text-center"><p className="designing-kicker text-[#74f3cd]">The Creative Team</p><h2 className="mb-4">Meet the People Behind <span>the Work</span></h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-[#abb0c6]">Senior creatives who understand the difference between a beautiful design and a performing one.</p></div>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">{team.map(([initial, name, role]) => <div className="text-center flex flex-col gap-3" key={name}><div className="designing-avatar">{initial}</div><h3 className="mt-4 text-lg font-bold">{name}</h3><p className="mt-1 text-sm text-[#abb0c6]">{role}</p></div>)}</div>
        </Container>
      </section>

      <section className="designing-light-section px-3 py-20 sm:py-28"><Container className="common-container"><p className="designing-kicker">Our Design Philosophy</p><h2>How We Think <span>About Design</span></h2><div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{[["Made to Perform", "A beautiful creative that doesn’t convert is just wallpaper. Our designs are built to generate engagement, clicks, and business results."], ["Strategy First, Always", "Design without strategy is decoration. Every creative starts with your audience, objective, and platform — and then we make it beautiful."], ["Consistent Across Every Touchpoint", "From a social post to an investor deck, everything looks and feels like one brand. Consistency builds recognition, and recognition builds trust."], ["Fast. Without Cutting Corners.", "We move quickly because we have tight processes and senior oversight at every stage, not because we skip the details."]].map(([title, description]) => <article className="designing-philosophy" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></Container></section>

      <section className="designing-light-section designing-cta px-3 py-24 text-center sm:py-32">
        <Container className="common-container">
          <h2 className="mb-4">Ready to Brief Us on Your Next Design Project?</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 font-bold text-[#484848]">Tell us what you need — we&apos;ll 
            tell you exactly how we&apos;d approach it. No obligation, no generic pitch.</p>
          <div className="mt-9 flex justify-center gap-4">
            <Linkbtn href="#" variant="secondary" size="md">Get Free Audit ↗</Linkbtn>
            <Linkbtn href="/contact" variant="outline" size="md">Talk to the Team</Linkbtn>
            </div>
          </Container>
        </section>
    </main>
  );
}
