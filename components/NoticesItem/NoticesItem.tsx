'use client';

import Image from 'next/image';
import styles from './NoticesItem.module.css';
import { Notice } from '@/types/notice';

interface Props {
  notice: Notice;
}

export const NoticesItem = ({ notice }: Props) => {
  const isAuth = false; // з auth store

  const handleLearnMore = () => {
    if (!isAuth) {
      // open ModalAttention
      return;
    }
    // open ModalNotice
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
      <Image
        src={notice.imgURL}
        alt={notice.title}
        width={300}
        height={200}
        className={styles.image}
      />

      <h3>{notice.title}</h3>
      <p>{notice.comment}</p>

      <div className={styles.actions}>
        <button onClick={handleLearnMore}>Learn more</button>
        <button onClick={toggleFavorite}>❤</button>
      </div>
    </li>
  );
};