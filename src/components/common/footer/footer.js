import Link from "next/link";
import Container from "@/components/common/container/container";

const footerGroups = [
  {
    title: "Services",
    links: [
      ["Digital Marketing", "/services/digitalmarketing"],
      ["SEO & Analytics", "/services"],
      ["Design & Branding", "/services/designing"],
      ["Content Strategy", "/services"],
      ["Paid Advertising", "/services"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Case Studies", "/#case-studies"],
      ["Blog", "/blogs"],
      ["Careers", "/contact"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Free Audit", "/contact"],
      ["Growth Toolkit", "/blogs"],
      ["Newsletter", "/contact"],
      ["Privacy Policy", "/contact"],
      ["Terms of Use", "/contact"],
    ],
  },
];

const socialLinks = [
  ["in", "LinkedIn", "https://www.linkedin.com/"],
  ["X", "X", "https://x.com/"],
  ["f", "Facebook", "https://www.facebook.com/"],
  ["▶", "YouTube", "https://www.youtube.com/"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="common-container site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-intro">
            <Link href="/" className="site-footer-mark" aria-label="Purple Brick Digital home">
              PBD
            </Link>
            <p>We build high-performance marketing systems that generate leads, drive conversions, and scale revenue consistently.</p>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="site-footer-group">
              <h4>{group.title}</h4>
              <ul>
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="site-footer-bottom">
          <p>&copy; 2025 Purple Brick Digital. All rights reserved.</p>
          <div className="site-footer-socials" aria-label="Social media links">
            {socialLinks.map(([mark, label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                {mark}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
