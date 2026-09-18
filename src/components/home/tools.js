"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/container/container";
import klingAi from "@/assets/images/tools/kling-ai.png";
import claude from "@/assets/images/tools/claude.png";
import googlelabs from "@/assets/images/tools/google-labs.png";
import adobeFirefly from "@/assets/images/tools/adobe-firefly.png";
import chatgpt from "@/assets/images/tools/chatgpt.png";
import jasper from "@/assets/images/tools/jasper.png";
import synthesia from "@/assets/images/tools/synthesia.png";
import make from "@/assets/images/tools/make.png";
import elevenLabs from "@/assets/images/tools/eleven-labs.png";
import gemini from "@/assets/images/tools/gemini.png";
import tripleWhale from "@/assets/images/tools/triple-whale.png";


export const defaultToolsData = {
  "AI Tools": [
    { name: "KlingAI", logo: klingAi },
    { name: "Claude", logo: claude },
    { name: "Google Labs", logo: googlelabs },
    { name: "Adobe Firefly", logo: adobeFirefly },
    { name: "ChatGPT", logo: chatgpt },
    { name: "Jasper", logo: jasper },
    { name: "Synthesia", logo: synthesia },
    { name: "Make", logo: make },
    { name: "Eleven Labs", logo: elevenLabs },
    { name: "Gemini", logo: gemini },
    { name: "Triple Whale", logo: tripleWhale },
  ],

  "Marketing & Strategy": [
    { name: "HubSpot", logo: klingAi },
    { name: "Semrush", logo: claude },
    { name: "Mailchimp", logo: gemini },
    { name: "Meta Ads", logo: adobeFirefly },
  ],

  "Design & Content": [
    { name: "HubSpot", logo: klingAi },
    { name: "Semrush", logo: claude },
    { name: "Mailchimp", logo: gemini },
    { name: "Meta Ads", logo: adobeFirefly },
  ],

  "SEO & Analytics": [
    { name: "HubSpot", logo: klingAi },
    { name: "Semrush", logo: claude },
    { name: "Mailchimp", logo: gemini },
    { name: "Meta Ads", logo: adobeFirefly },
  ],
};

const Tools = ({
  title = "Powered By The Advanced AI Tools",
  subtitle = "Driven By The Right Strategy",
  tabsData = defaultToolsData,
  defaultActiveTab,
  eyebrow,
  displayMode = "logos",
  sectionClassName = "bg-white py-20",
  containerClassName = "common-container w-full flex flex-col items-center text-center",
}) => {
  const tabs = Object.keys(tabsData);
  const firstTab = defaultActiveTab && tabsData[defaultActiveTab] ? defaultActiveTab : tabs[0];
  const [activeTab, setActiveTab] = useState(firstTab);
  const selectedTab = tabsData[activeTab] ? activeTab : firstTab;
  const activeTools = selectedTab ? tabsData[selectedTab] : [];

  return (
    <section className={sectionClassName}>
      <Container className={containerClassName}>
        {eyebrow && <p className="mb-3 text-[13px] font-semibold leading-[21px] text-[#ba41f6]">{eyebrow}</p>}
        <h2 className={`comn-heading mb-6 font-bold text-[#222] ${displayMode === "chips" ? "max-w-[940px] text-[clamp(2rem,3.1vw,2.75rem)] leading-[1.14] tracking-[-0.44px]" : ""}`}>
          {title}
        </h2>

        <p className={`mt-3 ${displayMode === "chips" ? "max-w-[788px] text-[16.5px] font-normal leading-[27px] text-[#5b5b66]" : "comn-sub-heading font-semibold text-black"}`}>
          {subtitle}
        </p>

        <div className={`flex flex-wrap justify-center ${displayMode === "chips" ? "mt-14 gap-2.5" : "mt-12 gap-4"}`}>
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`${displayMode === "chips" ? "rounded-full border-2 border-black px-6 pb-[13px] pt-3 text-sm font-semibold leading-none" : "rounded-full px-4 py-2 text-sm font-semibold sm:px-8 sm:py-3 md:text-base"} transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#12121a] text-white"
                  : "bg-[#efe7ff] text-[#12121a]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {displayMode === "chips" ? (
          <div className="mt-8 flex min-h-12 flex-wrap justify-center gap-2.5">
            {activeTools.map((tool) => <span key={tool.name} className="flex h-12 items-center gap-[9px] rounded-[10px] border border-[#e6e1f0] bg-[#f6f3fc] px-5 py-[11px] text-sm font-medium leading-[23px] text-[#12121a]"><i className={`h-[9px] w-[9px] rounded-full ${tool.color || "bg-[#ba41f6]"}`} />{tool.name}</span>)}
          </div>
        ) : (
          <div className="mt-8 grid w-3/4 grid-cols-3 items-center gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-10 md:grid-cols-6">
            {activeTools.map((tool) => <div key={tool.name} className="flex justify-center grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"><Image src={tool.logo} alt={tool.name} width={80} height={100} className="h-[80px] w-auto object-contain sm:object-cover" /></div>)}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Tools;
