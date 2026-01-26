// import Image from 'next/image';
// import Link from 'next/link';
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "404 - Page not found",
//   description: "Sorry, the page you are looking for does not exist.",
  
//   openGraph: {
//     title: "404 - Page not found",
//     description: "Sorry, the page you are looking for does not exist.",
//     url: "https://Petl💛ve.com/not-found",
//     siteName: "Petl💛ve",
//     images: [
//       {
//         url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
//         width: 1200,
//         height: 630,
//         alt: "404 - Page not found",
//       },
//     ],
//     type: "website",
//   },
// };

// export default function NotFoundPage() {
//   return (
//     <div className="not-found">
//       <div className="card">
//         <div className="code">
//           <span>4</span>

//           <Image
//             src="/images/notfound-img.png"
//             alt="Cat"
//             width={280}
//             height={280}
//             priority
//           />

//           <span>4</span>
//         </div>

//         <p className="text">
//           Oops! This page not found :( 
//         </p>

//         <Link href="/" className="btn">
//           To home page
//         </Link>
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: "404 - Page not found",
  description: "Sorry, the page you are looking for does not exist.",
  
  openGraph: {
    title: "404 - Page not found",
    description: "Sorry, the page you are looking for does not exist.",
    url: "https://Petlove.com/not-found",
    siteName: "Petlove",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "404 - Page not found",
      },
    ],
    type: "website",
  },
};

export default function NotFoundPage() {
  return (
    <div className={styles['not-found']}>
      <div className={styles.card}>
        <div className={styles.code}>
          <span>4</span>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/notfound-img.png"
              alt="Cat"
              fill
              sizes="(max-width: 767px) 109px, 280px"
              priority
            />
          </div>

          <span>4</span>
        </div>

        <p className={styles.text}>
          Oops! This page not found :( 
        </p>

        <Link href="/" className={styles.btn}>
          To home page
        </Link>
      </div>
    </div>
  );
}
