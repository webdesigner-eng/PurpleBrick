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


const tabsData = {
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

const Tools = () => {
  const tabs = Object.keys(tabsData);
  const [activeTab, setActiveTab] = useState("AI Tools");

  return (
    <section className="bg-white py-20">
      <Container className="common-container w-full flex flex-col items-center text-center">
        <h2 className="comn-heading font-bold text-[#222]">
          Powered By The Advanced AI Tools
        </h2>

        <p className="mt-3 comn-sub-heading font-semibold text-black">
          Driven By The Right Strategy
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 sm-px-8 sm-py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#202124] text-white"
                  : "bg-[#eee8ff] text-[#222]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 sm-mt-14 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 sm-gap-10 gap-5 items-center w-3/4 mx-auto">
          {tabsData[activeTab].map((tool) => (
            <div
              key={tool.name}
              className="flex justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={tool.logo}
                alt={tool.name}
                width={80}
                height={100}
                className="h-[80px] w-auto object-contain sm-object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Tools;