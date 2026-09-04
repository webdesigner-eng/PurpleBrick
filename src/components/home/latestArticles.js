"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/common/container/container";
import Image from "next/image";

import digitalImg from "@/assets/images/digital-marketing.png";
import designingImg from "@/assets/images/designing.png";
import consultingImg from "@/assets/images/consulting.png";

const articles = [
  {
    tag: "SEO & ANALYTICS",
    image: digitalImg,
    time: "5 min read",
    title: "10 Advanced SEO Tactics That Actually Work In 2025’s AI-First Search Era",
    desc: "Generative AI has reshaped search. Here's how to dominate rankings now that ChatGPT and Gemini are answering queries before users click.",
    author: "Sarah Kim",
    date: "Apr 28",
    initials: "SK",
  },
  {
    tag: "DESIGN & CONTENT",
    image: designingImg,
    time: "6 min read",
    title: "Why Your Landing Page Copy Is Killing and Affecting Conversions",
    desc: "Most landing pages lose visitors in the first 8 seconds. Learn the triggers and messaging frameworks that 10x conversion rates.",
    author: "Mike Johnson",
    date: "Apr 22",
    initials: "MJ",
  },
  {
    tag: "SOCIAL MEDIA",
    image: consultingImg,
    time: "6 min read",
    title: "Meta Ads in 2025: The New Targeting Playbook After Third-Party Cookie Death",
    desc: "Privacy changes wiped out old targeting methods. Here's the strategy helping our clients maintain ROAS above 4x consistently.",
    author: "Anika Patel",
    date: "Apr 15",
    initials: "AP",
  },
];

const LatestArticles = () => {
  return (
    <section className="latest-articles-section py-20 lg:py-24">
      <Container className="common-container">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="latest-articles-heading">
            Latest <span>Articles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-2xl border border-[#5A7AF7]/40 bg-[#1E1F21]"
            >
              <div className="">
                <div className="relative w-full h-55 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>

                {/* <span className="latest-articles-time block absolute right-4 bottom-4 rounded-full border border-[#5A7AF7]/40 bg-[#07102c] px-3 py-1.5">
                  {article.time}
                </span> */}
              </div>

              <div className="p-6">
                <span className="latest-articles-tag block rounded bg-[#13C4FF]/10 px-3 py-2 mb-4">
                  {article.tag}
                </span>

                <h3 className="latest-articles-card-title mb-4">
                  {article.title}
                </h3>

                <p className="latest-articles-desc mb-6">{article.desc}</p>

                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="latest-articles-avatar w-8 h-8 rounded-full bg-[#5A7AF7] flex items-center justify-center">
                      {article.initials}
                    </span>

                    <div>
                      <h4 className="latest-articles-author">
                        {article.author}
                      </h4>
                      <p className="latest-articles-date">{article.date}</p>
                    </div>
                  </div>

                  <Link href="/" className="latest-articles-read">
                    Read <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-20">
          <Link
            href="/"
            className="latest-articles-read inline-flex items-center rounded-lg border border-[#13C4FF]/60 px-7 py-4"
          >
            Read All Blogs <span className="ml-2">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default LatestArticles;