export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export const ctaLink = {
  label: "Book a Strategy Call",
  href: "/book",
} as const;
