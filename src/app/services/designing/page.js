import Container from "@/components/common/container/container";
import Link from "next/link";

const servicePillars = [
  {
    number: "01",
    name: "Brand & Identity",
    title: "Systems that make a brand recognizable",
    description:
      "Complete brand systems — logo, typography, color palette, and usage guidelines — plus packaging that stands out on the shelf and tells your story before a customer reads a word.",
    tags: ["Brand Identity Design", "Logo Design", "Packaging Design"],
    image: "/designing/pillar-1.svg",
  },
  {
    number: "02",
    name: "Performance Creative",
    title: "Visuals built to earn the click",
    description:
      "Scroll-stopping visuals for Meta, Google, and programmatic ads, on-brand social posts and carousels, plus brochures and print-ready collaterals that convert in the real world as much as online.",
    tags: ["Marketing Collaterals", "Ad Creative Designing", "Social Media Creatives"],
    image: "/designing/pillar-2.svg",
  },
  {
    number: "03",
    name: "Motion & Digital Product",
    title: "Where design meets the interface",
    description:
      "Short-form reels and brand films edited for retention, investor decks structured to make your argument land, and clean website UI that balances visual quality with usability.",
    tags: ["Motion & Video Editing", "Presentation Design", "Website UI Design"],
    image: "/designing/pillar-3.svg",
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

export default function DesigningServicePage() {
  return (
    <main className="designing-page overflow-hidden bg-[#050719] text-white">
      <section className="designing-hero relative flex min-h-screen items-end overflow-hidden px-3 pb-20 pt-40 sm:pb-28">
        <div className="designing-orb designing-orb-one" />
        <div className="designing-orb designing-orb-two" />
        <Container className="common-container designing-hero-grid relative z-10 w-full">
          <div className="designing-hero-copy"><p className="designing-eyebrow">Strategy-Backed Creative Design</p>
          <h1>Design That Stops the Scroll.<br /><span>Creatives That Convert.</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#c9c9d3] sm:text-lg">
            We create high-impact visuals that help your brand stand out and communicate clearly. From ad creatives and motion videos to brand identity — every design is crafted with strategy, consistency, and performance in mind.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="designing-primary-button">Get Free Audit <span>↗</span></Link>
            <a href="#work" className="designing-secondary-button">See Our Work <span>↓</span></a>
          </div>
          <div className="mt-16 grid max-w-xl grid-cols-3 gap-5 border-t border-white/20 pt-6 sm:gap-10">
            {[['200+', 'Creatives Per Month'], ['9', 'Design Services'], ['7', 'Websites Designed']].map(([value, label]) => <div key={label}><strong className="block text-3xl font-bold sm:text-4xl">{value}</strong><span className="mt-1 block text-xs text-[#a9aabb] sm:text-sm">{label}</span></div>)}
          </div>
          </div>
          <div className="designing-hero-art"><img src="/designing/hero-1.png" alt="Creative design work" /><div><img src="/designing/hero-2.png" alt="Design work" /><img src="/designing/hero-3.png" alt="Design work" /></div></div>
        </Container>
      </section>

      <section className="designing-light-section px-3 py-20 sm:py-28">
        <Container className="common-container">
          <p className="designing-kicker">What We Do</p>
          <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
            <h2>Nine Design Services.<br /><span>One Creative Team.</span></h2>
            <p className="max-w-xl text-base leading-7 text-[#5b5b67]">Every format, every platform, every brief — handled by specialists who understand both aesthetics and performance.</p>
          </div>
          <div className="designing-pillars">
            {servicePillars.map((pillar, index) => <article key={pillar.number} className={`designing-pillar ${index === 1 ? "designing-pillar-reverse" : ""}`}>
              <div className="md:col-span-8"><p className="designing-number">{pillar.number} — {pillar.name}</p><h3>{pillar.title}</h3>
              <p className="leading-7 text-[#585864]">{pillar.description}</p><p className="mt-10 text-sm font-bold uppercase tracking-[0.16em] text-[#282832]">Included in this pillar</p><div className="mt-3 flex flex-wrap gap-2">{pillar.tags.map((tag) => <span className="designing-tag" key={tag}>{tag}</span>)}</div>
              </div>
              {/* <div className="md:col-span-8"></div> */}
              <img className="designing-pillar-art" src={pillar.image} alt="" />
            </article>)}
          </div>
        </Container>
      </section>

      <section id="work" className="designing-dark-section px-3 py-20 sm:py-28">
        <Container className="common-container">
          <p className="designing-kicker text-[#74f3cd]">Our Toolkit</p>
          <h2 className="max-w-3xl">The Software We Work <span>With Every Day</span></h2>
          <p className="mt-5 max-w-2xl leading-7 text-[#abb0c6]">Industry-standard tools, combined with the latest AI creative stack — so we’re fast without being generic.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[["Design & Layout", "Adobe Photoshop · Adobe Illustrator · Figma"], ["Video & Motion", "Premiere Pro · After Effects · Canva Pro"], ["AI Creative Tools", "Adobe Firefly · ChatGPT · Google Labs"]].map(([title, tools]) => <div className="designing-tool-card" key={title}><span className="text-sm font-bold text-[#6af0c5]">{title}</span><p>{tools}</p></div>)}
          </div>
          <div className="mt-28">
            <p className="designing-kicker text-[#74f3cd]">Our Work</p><h2>Creative Work Across <span>Industries</span></h2><p className="mt-5 text-[#abb0c6]">A selection of ad creatives and brand communication produced for our clients.</p>
            <div className="designing-case-list">{projects.map(([initial, title, description], index) => <article className="designing-case" key={title}><div className="designing-case-heading"><b className={`designing-case-badge badge-${initial}`}>{initial}</b><div><h3>{title}</h3><p>{description}</p></div></div><div className="designing-case-images"><img src={`/designing/${index === 0 ? "farmery" : index === 1 ? "hdb" : "alpex"}-1.png`} alt={`${title} campaign`} /><img src={`/designing/${index === 0 ? "farmery" : index === 1 ? "hdb" : "alpex"}-2.png`} alt={`${title} campaign`} /></div></article>)}</div>
          </div>
        </Container>
      </section>

      <section className="designing-light-section px-3 py-20 sm:py-28">
        <Container className="common-container">
          <p className="designing-kicker">Website Design</p><h2>Websites We&apos;ve Designed <span>& Built</span></h2><p className="mt-5 max-w-2xl leading-7 text-[#5b5b67]">Clean, conversion-focused web design across industries and geographies — from clinics and service businesses to agencies and solar manufacturers.</p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">{websites.map(([url, title, description]) => <article className="designing-site-card" key={url}><div className="designing-browser"><div className="flex gap-1"><i /><i /><i /></div><span>{url}</span></div><div className="designing-site-preview"><strong>{title}</strong><p>{description}</p><button>Get Started Free</button></div><h3>{title}</h3><a href="#work">{url} ↗</a></article>)}</div>
        </Container>
      </section>

      <section className="designing-dark-section px-3 py-20 sm:py-28">
        <Container className="common-container">
          <p className="designing-kicker text-[#74f3cd]">How We Work</p><h2>No File Goes Into Production Until <span>Everyone&apos;s Aligned</span></h2><p className="mt-5 max-w-2xl leading-7 text-[#abb0c6]">Four phases. Senior oversight at every stage. Built around your brief, not our templates.</p>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{process.map(([number, title, description]) => <article className="designing-process-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
          <div className="mt-28 text-center"><p className="designing-kicker text-[#74f3cd]">The Creative Team</p><h2>Meet the People Behind <span>the Work</span></h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-[#abb0c6]">Senior creatives who understand the difference between a beautiful design and a performing one.</p></div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">{team.map(([initial, name, role]) => <article className="text-center" key={name}><div className="designing-avatar">{initial}</div><h3 className="mt-4 text-lg font-bold">{name}</h3><p className="mt-1 text-sm text-[#abb0c6]">{role}</p></article>)}</div>
        </Container>
      </section>

      <section className="designing-light-section px-3 py-20 sm:py-28"><Container className="common-container"><p className="designing-kicker">Our Design Philosophy</p><h2>How We Think <span>About Design</span></h2><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{[["Made to Perform", "A beautiful creative that doesn’t convert is just wallpaper. Our designs are built to generate engagement, clicks, and business results."], ["Strategy First, Always", "Design without strategy is decoration. Every creative starts with your audience, objective, and platform — and then we make it beautiful."], ["Consistent Across Every Touchpoint", "From a social post to an investor deck, everything looks and feels like one brand. Consistency builds recognition, and recognition builds trust."], ["Fast. Without Cutting Corners.", "We move quickly because we have tight processes and senior oversight at every stage, not because we skip the details."]].map(([title, description]) => <article className="designing-philosophy" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></Container></section>

      <section className="designing-cta px-3 py-24 text-center sm:py-32"><Container className="common-container"><p className="designing-kicker text-[#74f3cd]">Ready When You Are</p><h2>Ready to Brief Us on Your Next <span>Design Project?</span></h2><p className="mx-auto mt-5 max-w-xl leading-7 text-[#c5c7d3]">Tell us what you need — we&apos;ll tell you exactly how we&apos;d approach it. No obligation, no generic pitch.</p><div className="mt-9 flex justify-center gap-4"><Link href="/contact" className="designing-primary-button">Get Free Audit ↗</Link><Link href="/contact" className="designing-secondary-button">Talk to the Team</Link></div></Container></section>
    </main>
  );
}
