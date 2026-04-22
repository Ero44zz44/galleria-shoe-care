export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#location" },
] as const;

export const SERVICES = [
  {
    id: "shoe-repair",
    icon: "Scissors",
    title: "Shoe Repair",
    description:
      "Heel replacement, sole repair, stitching, and full restoration for designer footwear.",
  },
  {
    id: "bag-restoration",
    icon: "Briefcase",
    title: "Bag Restoration",
    description:
      "Interior lining, handle repair, hardware replacement for luxury handbags.",
  },
  {
    id: "leather-refinishing",
    icon: "Palette",
    title: "Leather Refinishing",
    description:
      "Custom color refinishing and leather conditioning to restore the original look.",
  },
  {
    id: "sole-replacement",
    icon: "Hammer",
    title: "Sole Replacement",
    description:
      "Red bottom restoration, full sole replacement, rubber grips, and custom soles.",
  },
  {
    id: "hardware-replacement",
    icon: "Wrench",
    title: "Hardware Replacement",
    description:
      "Gold plating, zipper repair, clasp replacement, and metal hardware restoration.",
  },
  {
    id: "watch-strap",
    icon: "Watch",
    title: "Watch Strap Repair",
    description:
      "Leather watch band replacement, resizing, and custom strap creation.",
  },
] as const;

export const CONTACT = {
  phone: "(818) 633-5020",
  tel: "tel:8186335020",
  instagram: "https://www.instagram.com/galleriashoecare",
  instagramHandle: "@galleriashoecare",
  address: "2141 Glendale Galleria",
  city: "Glendale, CA 91210",
  mapEmbed:
    "https://maps.google.com/maps?q=34.1451338,-118.2595104&hl=en&z=17&output=embed",
} as const;

export const HOURS = [
  { day: "Monday – Friday", hours: "10:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "11:00 AM – 7:00 PM" },
] as const;

export const BRANDS = [
  "Louis Vuitton",
  "Hermès",
  "Louboutin",
  "Goyard",
  "Chanel",
  "Amiri",
];
