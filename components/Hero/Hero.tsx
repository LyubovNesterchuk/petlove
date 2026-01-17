import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroTop}>
        <h1>
          Take good care of <br /> your small pets
        </h1>

        <p className={styles.heroText}>
          Choosing a pet for your home is a choice that is meant to
          enrich your life with immeasurable joy and tenderness.
        </p>
      </div>

      <div className={styles.heroImage}>
        <Image
          src="/images/hero-img-desktop.jpg"
          alt="Woman with dog"
          fill
          priority
        />
      </div>
    </section>
  );
}

