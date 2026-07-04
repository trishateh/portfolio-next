import React from "react";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import Container from "./ui/Container";

const socialLinks = [
  { href: "https://github.com/trishateh", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/trishateh", label: "LinkedIn", Icon: Linkedin },
  { href: "https://twitter.com/_disco_giraffe", label: "X", Icon: Twitter },
];

const Footer = () => {
  return (
    <footer className="bg-brand-bg">
      {/* Signature gradient hairline */}
      <div className="h-px w-full bg-brand-gradient" />

      <Container>
        <div className="flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between md:gap-4">
          {/* Left - logo + copyright */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-icon.svg"
              alt="Trisha Teh"
              width={26}
              height={26}
              className="opacity-70"
            />
            <span className="font-mono text-xs text-slate-400">
              &copy; 2026 trisha.teh
            </span>
          </div>

          {/* Center - social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 transition-colors duration-200 hover:text-brand-purple"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Right - build meta */}
          <span className="font-mono text-xs text-slate-400">
            built with next.js &middot; deployed on netlify
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
