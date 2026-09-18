import { useState } from "react";
import { Button } from "@/components/core/Button/Button";
import { classNames } from "@/lib/classNames";
import styles from "./PublicHeader.module.css";

export type PublicHeaderState = "top" | "scrolled";
export type PublicNavItem = { label: string; href: string };

export type PublicHeaderProps = {
  state?: PublicHeaderState;
  brandHref?: string;
  navItems?: PublicNavItem[];
  loginHref?: string;
  primaryHref?: string;
  primaryLabel?: string;
  className?: string;
};

const DEFAULT_NAV: PublicNavItem[] = [
  { label: "Product⌄", href: "/#product" },
  { label: "For Candidates", href: "/candidates" },
  { label: "For Companies", href: "/companies" },
  { label: "Jobs", href: "/jobs" },
  { label: "Resources⌄", href: "/#resources" },
];

export function PublicHeader({
  state = "top",
  brandHref = "/",
  navItems = DEFAULT_NAV,
  loginHref = "/login",
  primaryHref = "/signup",
  primaryLabel = "Join Relevyn",
  className,
}: PublicHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={classNames(styles.header, state === "scrolled" && styles.scrolled, className)}>
      <a className={styles.brand} href={brandHref}>RELEVYN</a>
      <nav className={styles.desktopNav} aria-label="Primary navigation">
        {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
      </nav>
      <div className={styles.desktopActions}>
        <a className={styles.login} href={loginHref}>Log in</a>
        <Button className={styles.joinButton} href={primaryHref} size="md">{primaryLabel}</Button>
      </div>
      <button type="button" className={styles.menuTrigger} onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="public-mobile-nav">Menu</button>
      <nav id="public-mobile-nav" className={classNames(styles.mobileMenu, menuOpen && styles.mobileMenuOpen)} aria-label="Mobile navigation">
        {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label.replace("⌄", "")}</a>)}
        <a href={loginHref}>Log in</a>
        <Button className={styles.joinButton} href={primaryHref} fullWidth>{primaryLabel}</Button>
      </nav>
    </header>
  );
}
