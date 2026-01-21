// "use client";

// import Link from "next/link";
// // import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import clsx from "clsx";
// import styles from "./Header.module.css";

// export default function Header() {
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   const [menuOpen, setMenuOpen] = useState(false);

//   // ❗ мок авторизації
//   const isAuth = false;

//   const navLinks = [
//     { href: "/news", label: "News" },
//     { href: "/notices", label: "Find pet" },
//     { href: "/friends", label: "Our friends" },
//   ];

//   return (
//     <header
//       className={clsx(
//         styles.header,
//         isHome && styles.headerHome,
//         isHome && styles.home
//       )}
//     >
//       <div className={styles.container}>
      
//         <Link href="/" className={styles.logo}>
//           petl<svg className={styles.heart} width="23" height="23">
//             <use href="/sprite.svg#icon-heart" />
//           </svg>ove
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className={styles.nav}>
//           {navLinks.map(({ href, label }) => (
//             <Link
//               key={href}
//               href={href}
//               className={clsx(
//                 styles.navLink,
//                 pathname === href && styles.active
//               )}
//             >
//               {label}
//             </Link>
//           ))}
//         </nav>

//         {!isAuth ? (
//           <div className={styles.actions}>
//             <Link href="/login" className={styles.login}>
//               Log in
//             </Link>
//             <Link href="/register" className={styles.register}>
//               REGISTRATION
//             </Link>
//           </div>
//         ) : (
//            <div className={styles.user}>
//               {!isHome && (
//                 <button className={styles.logout}>
//                   Log out
//                 </button>
//               )}
//             <Link href="/profile" className={`${styles.userBar}`}>
//               <span className={styles.avatar}>
//                 <svg className={styles.userIcon} width="24" height="24">
//                   <use href="/sprite.svg#icon-user" />
//                 </svg>
//               </span>
//               <span className={styles.name}>Anna</span>
//             </Link>
//           </div>
//         )}  )}


"use client";

import Link from "next/link";
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
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          petl
          <svg className={styles.heart} width="23" height="23">
            <use href="/sprite.svg#icon-heart" />
          </svg>
          ove
        </Link>

        {/* NAV — tablet+ */}
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

        {/* RIGHT SIDE */}
        {!isAuth ? (
          <>
            {/* ACTIONS — tablet+ */}
            <div className={styles.actions}>
              <Link href="/login" className={styles.login}>
                Log in
              </Link>
              <Link href="/register" className={styles.register}>
                Registration
              </Link>
            </div>

            {/* BURGER — mobile */}
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
              <button className={styles.logout}>Log out</button>
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
  );
}


      