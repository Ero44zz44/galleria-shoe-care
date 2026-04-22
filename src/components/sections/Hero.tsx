"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { CONTACT } from "@/lib/constants";

function fadeUpProps(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: "easeOut" as const, delay },
  };
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #1C0E03 0%, #0A0A0A 65%)",
      }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Thin horizontal gold lines — decorative */}
      <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A668]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A668]/8 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Overline */}
        <motion.p className="overline mb-8" {...fadeUpProps(0)}>
          Glendale Galleria · Est. Since 2000
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-[1.05] tracking-[-0.01em] text-[#F5F1EA] mb-6"
          {...fadeUpProps(0.15)}
        >
          Craftsmanship
          <br />
          <span className="text-[#C9A668]">your luxuries</span>
          <br />
          deserve.
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          className="gold-rule mx-auto w-24 my-8"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        />

        {/* Subhead */}
        <motion.p
          className="text-[#8A8478] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
          {...fadeUpProps(0.5)}
        >
          Expert repair and restoration for designer shoes, bags, and leather
          goods.{" "}
          <span className="text-[#C9A668]/80">Glendale Galleria.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          {...fadeUpProps(0.65)}
        >
          <a
            href={CONTACT.tel}
            className="btn-gold inline-flex items-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.12em] uppercase rounded-none w-full sm:w-auto justify-center"
          >
            <Phone size={14} />
            Call {CONTACT.phone}
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-medium tracking-[0.12em] uppercase border border-[#C9A668]/50 text-[#C9A668] hover:bg-[#C9A668]/10 transition-colors duration-300 rounded-none w-full sm:w-auto justify-center"
          >
            <InstagramIcon size={14} />
            Visit our Instagram
          </a>
        </motion.div>

        {/* Brand marquee */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          {...fadeUpProps(0.8)}
        >
          {["Louis Vuitton", "Hermès", "Louboutin", "Goyard", "Chanel", "Amiri"].map(
            (brand) => (
              <span
                key={brand}
                className="text-[10px] tracking-[0.2em] uppercase text-[#8A8478]/60"
              >
                {brand}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8A8478]/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
