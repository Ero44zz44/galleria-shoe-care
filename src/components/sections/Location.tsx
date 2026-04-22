"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { CONTACT, HOURS } from "@/lib/constants";

export default function Location() {
  return (
    <section id="location" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="overline mb-4">Find Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F1EA] font-bold tracking-tight">
            Visit the Shop
          </h2>
          <div className="gold-rule mx-auto w-16 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-video lg:aspect-auto lg:min-h-[400px] border border-[#2A2A2A] overflow-hidden"
          >
            <iframe
              title="Galleria Shoe Care location on Google Maps"
              src={CONTACT.mapEmbed}
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full grayscale contrast-125 brightness-75"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col justify-center gap-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <MapPin size={16} className="text-[#C9A668] mt-0.5 shrink-0" />
              <div>
                <p className="overline mb-2">Location</p>
                <p className="text-sm text-[#F5F1EA]">{CONTACT.address}</p>
                <p className="text-sm text-[#8A8478]">{CONTACT.city}</p>
              </div>
            </div>

            <div className="gold-rule" />

            {/* Hours */}
            <div className="flex gap-4">
              <Clock size={16} className="text-[#C9A668] mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="overline mb-3">Hours</p>
                <dl className="space-y-2">
                  {HOURS.map(({ day, hours }) => (
                    <div
                      key={day}
                      className="flex justify-between gap-4 text-xs"
                    >
                      <dt className="text-[#8A8478]">{day}</dt>
                      <dd className="text-[#F5F1EA]">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="gold-rule" />

            {/* Phone + Instagram */}
            <div className="flex flex-col gap-4">
              <a
                href={CONTACT.tel}
                className="flex items-center gap-3 group"
              >
                <Phone
                  size={16}
                  className="text-[#C9A668] group-hover:text-[#E8C98A] transition-colors"
                />
                <div>
                  <p className="overline mb-1">Phone</p>
                  <p className="text-sm text-[#F5F1EA] group-hover:text-[#C9A668] transition-colors">
                    {CONTACT.phone}
                  </p>
                </div>
              </a>

              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <InstagramIcon
                  size={16}
                  className="text-[#C9A668] group-hover:text-[#E8C98A] transition-colors"
                />
                <div>
                  <p className="overline mb-1">Instagram</p>
                  <p className="text-sm text-[#F5F1EA] group-hover:text-[#C9A668] transition-colors">
                    {CONTACT.instagramHandle}
                  </p>
                </div>
              </a>
            </div>

            <div className="gold-rule" />

            {/* CTA */}
            <a
              href={CONTACT.tel}
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.12em] uppercase rounded-none"
            >
              <Phone size={13} />
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
