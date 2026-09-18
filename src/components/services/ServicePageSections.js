import Container from "@/components/common/container/container";
import Link from "next/link";

export function ServiceHero({ content }) {
  return (
    <section className="designing-hero relative flex min-h-screen items-center overflow-hidden px-3 pb-20 pt-40 sm:pb-28">
      <div className="designing-orb designing-orb-one" />
      <div className="designing-orb designing-orb-two" />
      <Container className="common-container designing-hero-grid relative z-10 w-full">
        <div className="designing-hero-copy">
          <p className="designing-eyebrow">{content.eyebrow}</p>
          <h1 className="mb-6">{content.title} <span>{content.highlight}</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#c9c9d3] sm:text-lg">{content.description}</p>
          <div className="mb-9 mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="designing-primary-button">Get Free Audit <span>↗</span></Link>
            <a href="#work" className="designing-secondary-button">See Our Work <span>↓</span></a>
          </div>
          <div className="mt-16 grid max-w-xl grid-cols-3 gap-5 border-t border-white/20 pt-6 sm:gap-10">
            {content.stats.map(([value, label]) => <div key={label}><strong className="block text-3xl font-bold sm:text-4xl">{value}</strong><span className="mt-1 block text-xs text-[#a9aabb] sm:text-sm">{label}</span></div>)}
          </div>
        </div>
        <div className="designing-hero-art"><img src={content.images[0]} alt="Creative design work" /><div><img src={content.images[1]} alt="Design work" /><img src={content.images[2]} alt="Design work" /></div></div>
      </Container>
    </section>
  );
}

export function ServicePillars({ title, description, pillars }) {
  return (
    <section className="designing-light-section px-3 py-20 sm:py-28">
      <Container className="common-container">
        <p className="designing-kicker text-center">What We Do</p>
        <div className="m-auto flex w-full max-w-[1000px] flex-col">
          <h2 className="mb-6 text-center">{title} <span>One Creative Team.</span></h2>
          <p className="text-center leading-7 text-[#5b5b67]">{description}</p>
        </div>
        <div className="designing-pillars">
          {pillars.map((pillar, index) => <article key={pillar.number} className={`designing-pillar ${index === 1 ? "designing-pillar-reverse" : ""}`}><div className="designing-pillar-copy"><p className="designing-number">{pillar.number} — {pillar.name}</p><h3>{pillar.title}</h3><p className="leading-7 text-[#585864]">{pillar.description}</p><p className="mt-10 text-sm font-bold uppercase tracking-[0.16em] text-[#282832]">Included in this pillar</p><div className="mt-3 flex flex-wrap gap-2">{pillar.tags.map((tag) => <span className="designing-tag" key={tag}>{tag}</span>)}</div></div><img className="designing-pillar-art" src={pillar.image} alt="" /></article>)}
        </div>
      </Container>
    </section>
  );
}
