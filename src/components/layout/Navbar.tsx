"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

export default function Navbar() {
  const scrolled = useScrolled();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-sm md:text-base tracking-[0.2em] text-[#F5F1EA] uppercase hover:text-[#C9A668] transition-colors duration-300"
        >
          Galleria Shoe Care
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.15em] uppercase text-[#8A8478] hover:text-[#C9A668] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href={CONTACT.tel}
            className="hidden md:inline-flex btn-gold items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase rounded-none"
          >
            Call Now
          </a>

          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 text-[#F5F1EA] hover:text-[#C9A668] transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A]/98 border-t border-[#2A2A2A] px-6 py-4">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center min-h-[44px] text-xs tracking-[0.15em] uppercase text-[#8A8478] hover:text-[#C9A668] transition-colors border-b border-[#2A2A2A] last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT.tel}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center min-h-[44px] mt-4 btn-gold text-xs font-medium tracking-[0.1em] uppercase rounded-none"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
