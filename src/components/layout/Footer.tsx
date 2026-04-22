import { Phone } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Logo + tagline */}
          <div>
            <p className="font-serif text-sm tracking-[0.2em] uppercase text-[#F5F1EA] mb-3">
              Galleria Shoe Care
            </p>
            <p className="text-xs text-[#8A8478] leading-relaxed max-w-[220px]">
              Luxury shoe and leather repair. Glendale Galleria, California.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="overline mb-1">Navigation</p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-[#8A8478] hover:text-[#C9A668] transition-colors tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="overline mb-1">Contact</p>
            <a
              href={CONTACT.tel}
              className="flex items-center gap-2 text-xs text-[#8A8478] hover:text-[#C9A668] transition-colors"
            >
              <Phone size={13} />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#8A8478] hover:text-[#C9A668] transition-colors"
            >
              <InstagramIcon size={13} />
              {CONTACT.instagramHandle}
            </a>
            <p className="text-xs text-[#8A8478] mt-1">
              {CONTACT.address}
              <br />
              {CONTACT.city}
            </p>
          </div>
        </div>

        <div className="gold-rule my-10" />

        <p className="text-[10px] text-[#8A8478] tracking-widest uppercase text-center">
          © {year} Galleria Shoe Care. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
