import Button from "@/components/ui/button/Button";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Tools from "@/components/home/tools";
import Mind from "@/components/home/mind";
import Services from "@/components/home/services";
import CursorGlow from "@/components/common/cursorglow/CursorGlow";
import HappyClients from "@/components/home/happyclients";
import CaseStudies from "@/components/home/casestudies";
import CTA from "@/components/home/cta";
import LatestArticles from "@/components/home/latestArticles";
import AuditForm from "@/components/common/forms/AuditForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <CursorGlow />
      <About />
      <Tools />
      <Mind />
      <Services />
      <HappyClients/>
      <CaseStudies/>
      <CTA/>
      <LatestArticles/>
      <AuditForm/>
      {/* <Button variant="secondary" size="md">
        Click me
      </Button> */}

    </div>
  );
}
