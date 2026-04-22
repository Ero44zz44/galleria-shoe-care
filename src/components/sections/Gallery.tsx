"use client";

import { motion, type Variants } from "framer-motion";
import { ImageIcon } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

// TODO: Replace each placeholder div below with:
// <Image src="/photos/your-image.jpg" alt="Work description" fill className="object-cover" />
// Make sure to add the image files to the /public/photos/ directory.
// You can export photos directly from Instagram or take shop photos.
const GALLERY_ITEMS = [
  { id: 1, label: "Before & After" },
  { id: 2, label: "Sole Restoration" },
  { id: 3, label: "Color Refinishing" },
  { id: 4, label: "Bag Repair" },
  { id: 5, label: "Hardware Work" },
  { id: 6, label: "Recent Work" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="overline mb-4">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5F1EA] font-bold tracking-tight">
              Recent Work
            </h2>
          </div>
          <p className="text-xs text-[#8A8478] max-w-xs leading-relaxed md:text-right">
            Follow{" "}
            <a
              href="https://www.instagram.com/galleriashoecare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A668] hover:underline"
            >
              @galleriashoecare
            </a>{" "}
            for the latest transformations.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative aspect-square bg-[#111111] border border-[#C9A668]/20 hover:border-[#C9A668]/50 transition-colors duration-400 overflow-hidden cursor-pointer"
            >
              {/* TODO: Replace this entire div content with <Image> component */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <ImageIcon
                  size={28}
                  className="text-[#C9A668]/30 group-hover:text-[#C9A668]/50 transition-colors duration-300"
                />
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#8A8478]/50 group-hover:text-[#8A8478]/70 transition-colors duration-300">
                  {item.label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-4 h-px bg-[#C9A668]/40" />
              <div className="absolute top-0 left-0 w-px h-4 bg-[#C9A668]/40" />
              <div className="absolute bottom-0 right-0 w-4 h-px bg-[#C9A668]/40" />
              <div className="absolute bottom-0 right-0 w-px h-4 bg-[#C9A668]/40" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
