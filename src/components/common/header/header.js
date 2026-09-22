"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/common/container/container";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { motion } from "motion/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      key={isScrolled ? "scrolled-header" : "transparent-header"}
      initial={isScrolled ? { y: -100, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`site-header fixed top-0 left-0 w-full z-50 py-4 px-3 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <Container className="common-container">
        <div className="flex items-center justify-between relative">
          <div className="menu_bar relative">
            <button
              className={`menu-btn-1 ${isMenuOpen ? "active" : ""}`}
              onClick={() => {
                setIsMenuOpen((open) => !open);
                if (isMenuOpen) setIsServicesOpen(false);
              }}
              aria-label="Toggle Menu"
            >
              <span></span>
            </button>

            <div
              className={`menu_items absolute top-14 left-0 bg-white text-white p-5 rounded-lg min-w-[180px] transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
              }`}
            >
              <ul className="space-y-3">
                <li>
                  <Link href="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={closeMenu}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={closeMenu}>
                    Blog
                  </Link>
                </li>
                <li className="menu-services">
                  <button
                    type="button"
                    className="menu-services-toggle"
                    onClick={() => setIsServicesOpen((open) => !open)}
                    aria-expanded={isServicesOpen}
                  >
                    Services <span>{isServicesOpen ? "−" : "+"}</span>
                  </button>
                  <div className={`menu-service-links ${isServicesOpen ? "is-open" : ""}`}>
                    <Link href="/services/digitalmarketing" onClick={closeMenu}>Digital Marketing</Link>
                    <Link href="/services/designing" onClick={closeMenu}>Designing</Link>
                    <Link href="/services/consulting" onClick={closeMenu}>Consulting</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="brand_logo">
            <Link href="/">
              <Image src={logo} alt="Logo" width={200} height={100} />
            </Link>
          </div>

          <button className="bg-gradient-to-r from-[#5A7AF7] to-[#BA41F6] text-white font-bold px-4 py-2 rounded">
            Contact Us
          </button>
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
