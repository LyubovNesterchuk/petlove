import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page not found",
  description: "Sorry, the page you are looking for does not exist.",
  
  openGraph: {
    title: "404 - Page not found",
    description: "Sorry, the page you are looking for does not exist.",
    url: "https://Petl💛ve.com/not-found",
    siteName: "Petl💛ve",
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
    <div className="not-found">
      <div className="card">
        <div className="code">
          <span>4</span>

          <Image
            src="/images/notfound-img.png"
            alt="Cat"
            width={120}
            height={120}
            priority
          />

          <span>4</span>
        </div>

        <p className="text">
          Oops! This page not found :( 
        </p>

        <Link href="/" className="btn">
          To home page
        </Link>
      </div>
    </div>
  );
}