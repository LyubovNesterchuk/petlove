'use client';

import styles from './NoticesItem.module.css';

export const NoticesItem = ({ notice }: { notice: any }) => {
  const isAuth = false; // з auth store

  const handleLearnMore = () => {
    if (!isAuth) {
      // open ModalAttention
      return;
    }
    // fetch details → open ModalNotice
  };

  const toggleFavorite = () => {
    if (!isAuth) {
      // ModalAttention
      return;
    }
    // POST /favorites
  };

  return (
    <li className={styles.card}>
      <img src={notice.image} alt={notice.title} />

      <h3>{notice.title}</h3>

      <p>{notice.comment}</p>

      <div className={styles.actions}>
        <button onClick={handleLearnMore}>Learn more</button>
        <button onClick={toggleFavorite}>❤</button>
      </div>
    </li>
  );
};