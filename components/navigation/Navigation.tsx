"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { Container } from "@/components/layout";
import { cn } from "@/lib/cn";

import { ctaLink, navLinks } from "./nav-links";
import { useScrolled } from "./useScrolled";

const linkBaseClass =
  "rounded-md px-3 py-2 text-body-sm font-medium text-muted transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaClass =
  "inline-flex shrink-0 items-center justify-center rounded-lg bg-accent px-4 py-2 text-body-sm font-medium text-accent-foreground shadow-accent-glow transition-[background-color,box-shadow,transform] duration-300 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function Navigation() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const wasMenuOpenRef = useRef(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => !open);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      wasMenuOpenRef.current = true;
      firstMenuLinkRef.current?.focus();
      return;
    }

    if (wasMenuOpenRef.current) {
      wasMenuOpenRef.current = false;
      menuButtonRef.current?.focus();
    }
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 motion-reduce:transition-none",
        scrolled
          ? "border-b border-border bg-background/80 shadow-surface backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Main navigation">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6">
            <div className="md:justify-self-start">
              <Link
                className="inline-flex rounded-md px-2 py-1 text-body font-semibold tracking-tight text-foreground transition-colors duration-300 hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href="/"
                onClick={closeMenu}
              >
                CG
              </Link>
            </div>

            <ul className="hidden items-center gap-1 md:flex md:justify-self-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className={linkBaseClass} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 sm:gap-3 md:justify-self-end">
              <Link className={ctaClass} href={ctaLink.href} title={ctaLink.label}>
                <span className="hidden sm:inline">{ctaLink.label}</span>
                <span className="sm:hidden">Book Call</span>
              </Link>

              <button
                ref={menuButtonRef}
                aria-controls={menuId}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors duration-300 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
                onClick={toggleMenu}
                type="button"
              >
                <MenuIcon open={menuOpen} />
              </button>
            </div>
          </div>
        </Container>

        <div
          aria-hidden={!menuOpen}
          className={cn(
            "grid overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden",
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0",
          )}
          id={menuId}
          {...(!menuOpen ? { inert: true } : {})}
        >
          <div className="overflow-hidden">
            <Container className="py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      ref={index === 0 ? firstMenuLinkRef : undefined}
                      className={cn(linkBaseClass, "block w-full")}
                      href={link.href}
                      onClick={closeMenu}
                      tabIndex={menuOpen ? undefined : -1}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        </div>
      </nav>
    </header>
  );
}
