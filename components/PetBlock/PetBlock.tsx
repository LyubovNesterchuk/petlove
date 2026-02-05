import styles from './PetBlock.module.css';

export const PetBlock = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.background}>
        <div className={styles.imageWrapper}>
          <picture>
           
            <source
              media="(min-width: 1280px)"
              srcSet="/images/login-desktop.png 1x, /images/login-desktop@2x.png 2x"
            />

           
            <source
              media="(min-width: 768px)"
              srcSet="/images/login-tablet.png 1x, /images/login-tablet@2x.png 2x"
            />

           
            <img
              src="/images/login-mobile.png"
              srcSet="/images/login-mobile.png 1x, /images/login-mobile@2x.png 2x"
              alt="Pet"
              loading="lazy"
              className={styles.petImage}
            />
          </picture>


          {/* бейджик */}
        <div className={styles.card}>
            {/* <Image 
              src="/images/logout-cat.png"
              alt="Logout cat"
              width={36}
              height={36}
            />  */}
            <div className={styles.cardHeader}>
              <span className={styles.name}></span>
                <span className={styles.birthday}>Birthday: </span>
            </div>
            <p className={styles.text}></p>
          </div>
        </div>
      </div>

    </section>
  );
};


