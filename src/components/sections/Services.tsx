"use client";

import { motion, type Variants } from "framer-motion";
import {
  Scissors,
  Briefcase,
  Palette,
  Hammer,
  Wrench,
  Watch,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Scissors,
  Briefcase,
  Palette,
  Hammer,
  Wrench,
  Watch,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="overline mb-4">What We Do</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F1EA] font-bold tracking-tight">
            Our Services
          </h2>
          <div className="gold-rule mx-auto w-16 mt-6" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Card className="bg-[#111111] border-[#2A2A2A] ring-0 rounded-none h-full group hover:border-[#C9A668]/40 transition-colors duration-400">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#C9A668]/30 mb-4 group-hover:border-[#C9A668]/60 transition-colors duration-300">
                      {Icon && <Icon size={18} className="text-[#C9A668]" />}
                    </div>
                    <CardTitle className="font-serif text-lg text-[#F5F1EA] font-semibold tracking-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#8A8478] leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
