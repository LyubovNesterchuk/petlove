import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroTop}>
          <h1 className={styles.title}>
            Take good <span className={styles.titleAccent}>care</span> of your small pets
          </h1>
          <p className={styles.heroText}>
            Choosing a pet for your home is a choice that is meant to
            enrich your life with immeasurable joy and tenderness.
          </p>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="/images/hero-img-mobile.jpg"
            alt="Woman with dog"
            fill
            priority
            sizes="(min-width: 1280px) 1216px, (min-width: 768px) 704px, 335px"
            style={{ objectFit: 'cover' }}
          />

        <picture>
       
          <source
            media="(min-width: 1280px)"
            srcSet="
              /images/hero-img-desktop.jpg 1x,
              /images/hero-img-desktop@2x.jpg 2x
            "
          />

         
          <source
            media="(min-width: 768px)"
            srcSet="
              /images/hero-img-tablet.jpg 1x,
              /images/hero-img-tablet@2x.jpg 2x
            "
          />

          
          <Image
            src="/images/hero-img-mobile.jpg"
            alt="Woman with dog"
            fill
            priority
          />
        </picture>
        </div>
     </div>
  </section>
  );
}