"use client";
import React from "react";
import Container from "@/components/common/container/container";

const Mind = () => {
  return (
    <section className="mind-section">
      <Container className="common-container">
        <div className="flex flex-col items-center text-center">
          <h2 className="comn-heading"> Whats On Your <span>Mind ?</span>
          </h2>

          <div className="mind-form">
            <div className="flex items-end gap-4 mb-4">
              <label>I want</label>
              <input type="text" placeholder="A CRM system" />
            </div>

            <div className="flex items-end gap-4">
              <label>for my</label>
              <input type="text" placeholder="SaaS Startup" />
              <strong>Business</strong>
            </div>
          </div>

          <p>Type Your Answer Above — Your Custom Solution Is A Click Away.</p>

          <button className="comn-btn">Let The Magic Begin</button>
        </div>
      </Container>
    </section>
  );
};

export default Mind;