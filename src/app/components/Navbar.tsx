"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-bg/80 backdrop-blur-md border-b border-brand-line"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo-icon.svg"
              alt="Trisha Teh - Web3 Developer"
              width={32}
              height={32}
              className="group-hover:opacity-80 transition-opacity duration-200"
            />
            <span className="font-mono text-sm text-white">trisha.teh</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks
              .filter((link) => link.title !== "Contact")
              .map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="relative font-mono text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  {link.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            <Button variant="outline" size="sm" href="#contact">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
          >
            {navbarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-brand-surface/95 backdrop-blur-md border-b border-brand-line md:hidden"
            >
              <Container>
                <div className="py-6 space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.path}
                      href={link.path}
                      onClick={() => setNavbarOpen(false)}
                      className="block font-mono text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-200 py-2"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  );
};

export default Navbar;
