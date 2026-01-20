"use client";

import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);

  // ❗ мок авторизації
  const isAuth = false;

  const navLinks = [
    { href: "/news", label: "News" },
    { href: "/notices", label: "Find pet" },
    { href: "/friends", label: "Our friends" },
  ];

  return (
<header
  className={clsx(
    styles.header,
    isHome && styles.headerHome,
    isHome && styles.home
  )}
>
      <div className={styles.container}>
      
        <Link href="/" className={styles.logo}>
          petl<svg className={styles.heart} width="23" height="23">
            <use href="/sprite.svg#icon-heart" />
          </svg>ove
        </Link>

        {/* DESKTOP NAV */}
        <nav className={styles.nav}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                styles.navLink,
                pathname === href && styles.active
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        {!isAuth ? (
          <div className={styles.actions}>
            <Link href="/login" className={styles.login}>
              Log in
            </Link>
            <Link href="/register" className={styles.register}>
              REGISTRATION
            </Link>
          </div>
        ) : (
           <div className={styles.user}>
              {!isHome && (
                <button className={styles.logout}>
                  Log out
                </button>
              )}
            <Link href="/profile" className={`${styles.userBar}`}>
              <span className={styles.avatar}>
                <svg className={styles.userIcon} width="24" height="24">
                  <use href="/sprite.svg#icon-user" />
                </svg>
              </span>
              <span className={styles.name}>Anna</span>
            </Link>
          </div>
        )}

        {/* BURGER */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  styles.mobileLink,
                  pathname === href && styles.active
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {!isAuth ? (
            <div className={styles.mobileActions}>
              <Link href="/login">LOG IN</Link>
              <Link href="/register">REGISTRATION</Link>
            </div>
          ) : (
            <div className={styles.mobileUser}>
              <Link href="/profile">Profile</Link>
              <button>Log out</button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
