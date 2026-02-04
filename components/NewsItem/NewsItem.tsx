import Image from 'next/image';
import styles from './NewsItem.module.css';
import { News } from '@/types/news';

interface Props {
  item: News;
}

export const NewsItem = ({ item }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={item.imgUrl}
          alt={item.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.text}>{item.text}</p>

      <div className={styles.footer}>
        <span className={styles.date}>
          {new Date(item.date).toLocaleDateString()}
        </span>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Read more
        </a>
      </div>
    </article>
  );
};
