import { NewsItem } from '../NewsItem/NewsItem';
import styles from './NewsList.module.css';
import { News } from '@/types/news';

interface Props {
  news: News[];
}

export const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news.map(item => (
        <li key={item._id} className={styles.item}>
          <NewsItem item={item} />
        </li>
      ))}
    </ul>
  );
};