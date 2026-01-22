"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./MobileMenu.module.css";

interface Props {
  navLinks: {
    href: string;
    label: string;
  }[];
  onClose: () => void;
}

export default function MobileMenu({ navLinks, onClose }: Props) {
const pathname = usePathname();
const isHome = pathname === "/";

return (
  <div
  className={clsx(
    styles.menu,
    isHome ? styles.menuYellow : styles.menuWhite
  )}
>
    <button className={styles.close} onClick={onClose}>
      <svg width="24" height="24">
        <use href="/sprite.svg#icon-cross" />
      </svg>
    </button>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={onClose}
                className={clsx(
                  styles.link,
                  pathname === href && styles.active
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.actions}>
        <Link href="/login" className={styles.login}>
          Log in
        </Link>

        <Link href="/register" className={styles.register}>
          Registration
        </Link>
      </div>
    </div>
  );
}