import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   
            <Image
              className={styles.logo}
              src="/logo-black.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
        
  );
}
