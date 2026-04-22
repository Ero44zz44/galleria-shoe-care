"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="overline mb-6">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5F1EA] font-bold leading-tight tracking-tight mb-8">
              Two decades of
              <br />
              <span className="text-[#C9A668]">craftsmanship</span>
              <br />
              in Glendale Galleria.
            </h2>
            <div className="gold-rule w-16 mb-8" />
            <div className="space-y-5 text-[#8A8478] text-sm leading-[1.85]">
              <p>
                Every piece that comes through our door is treated with the care
                it deserves. From Louboutin red bottoms to Goyard leather, we
                restore luxury goods to their original beauty using traditional
                techniques and premium materials.
              </p>
              <p>
                Located inside the Glendale Galleria, we have spent over two
                decades earning the trust of clients who bring us their most
                treasured possessions — from limited-edition sneakers to
                heirloom handbags.
              </p>
              <p>
                Our approach is simple: treat every repair as if the piece were
                our own. No shortcuts. No compromises. Only meticulous,
                considered craftsmanship.
              </p>
            </div>

            {/* Brand trust strip */}
            <div className="mt-10 pt-8 border-t border-[#2A2A2A]">
              <p className="overline mb-4">Trusted by collectors of</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {["Louis Vuitton", "Hermès", "Louboutin", "Goyard", "Chanel", "Amiri"].map(
                  (brand) => (
                    <span
                      key={brand}
                      className="text-[10px] tracking-[0.15em] uppercase text-[#F5F1EA]/40"
                    >
                      {brand}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Right — image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            {/* TODO: Replace this div with <Image> component pointing to a shop or team photo */}
            <div className="relative aspect-[4/5] bg-[#111111] border border-[#C9A668]/20 overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-px bg-[#C9A668]/50" />
              <div className="absolute top-0 left-0 w-px h-8 bg-[#C9A668]/50" />
              <div className="absolute top-0 right-0 w-8 h-px bg-[#C9A668]/50" />
              <div className="absolute top-0 right-0 w-px h-8 bg-[#C9A668]/50" />
              <div className="absolute bottom-0 left-0 w-8 h-px bg-[#C9A668]/50" />
              <div className="absolute bottom-0 left-0 w-px h-8 bg-[#C9A668]/50" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-[#C9A668]/50" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-[#C9A668]/50" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <User size={36} className="text-[#C9A668]/25" />
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#8A8478]/40">
                  Shop Photo
                </span>
              </div>

              {/* Subtle inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(139,90,43,0.06) 0%, transparent 70%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
