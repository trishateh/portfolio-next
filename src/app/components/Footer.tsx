import React from "react";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import Container from "./ui/Container";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-brand-surface">
      <Container>
        <div className="py-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/logo-icon.svg" 
              alt="Trisha Teh" 
              width={32} 
              height={32}
              className="opacity-60"
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left side - Built with */}
            <div className="text-slate-400 text-sm text-center md:text-left">
              Built with{" "}
              <span className="text-brand-accent font-medium">Next.js</span> &{" "}
              <span className="text-brand-accent font-medium">Tailwind CSS</span>
              <br className="md:hidden" />
              <span className="hidden md:inline"> • </span>
              Deployed with{" "}
              <span className="text-brand-accent font-medium">Netlify</span>
            </div>

            {/* Center - Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/trishateh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-brand-accent transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/trishateh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-brand-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/_disco_giraffe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-brand-accent transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* Right side - Copyright */}
            <div className="text-slate-400 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} Trisha Teh
              <br className="md:hidden" />
              <span className="hidden md:inline"> • </span>
              All rights reserved
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
