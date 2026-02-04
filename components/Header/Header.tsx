"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import Modal from "@/components/Modal/Modal";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import styles from "./Header.module.css";
import LogOutBtn from "@/components/LogOutBtn/LogOutBtn";

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
    <>
      <header
        className={clsx(
          styles.header,
          isHome && styles.headerHome,
          isHome && styles.home
        )}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            petl
            <svg className={styles.heart} width="23" height="23">
              <use href="/sprite.svg#icon-heart" />
            </svg>
            ove
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
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
                </li>
              ))}
            </ul> 
          </nav>

          {!isAuth ? (
            <>
              <div className={styles.actions}>
                <Link href="/login" className={styles.login}>
                  Log in
                </Link>
                <Link href="/register" className={styles.register}>
                  Registration
                </Link>
              </div>

              <button
                className={styles.burger}
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
              >
                <svg width="24" height="24">
                  <use href="/sprite.svg#icon-menu" />
                </svg>
              </button>
            </>
          ) : (
            <div className={styles.user}>
              {!isHome && (
                <LogOutBtn />
              )}

              <Link href="/profile" className={styles.userBar}>
                <span className={styles.avatar}>
                  <svg className={styles.userIcon} width="24" height="24">
                    <use href="/sprite.svg#icon-user" />
                  </svg>
                </span>
                <span className={styles.name}>Anna</span>
              </Link>
            </div>
          )}
        </div>
      </header>

      
      {menuOpen && (
        <Modal onClose={() => setMenuOpen(false)}>
          <MobileMenu
            navLinks={navLinks}
            onClose={() => setMenuOpen(false)}
          />
        </Modal>
      )}
    </>
  );
}


      