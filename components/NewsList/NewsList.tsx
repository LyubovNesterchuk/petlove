import styles from './NewsList.module.css';
import { NewsItem } from '../NewsItem/NewsItem';
import { NewsItem as NewsItemType } from '@/types/news';

export const NewsList = ({ news }: { news: NewsItemType[] }) => {
  return (
    <div className={styles.list}>
      {news.map(item => (
        <NewsItem key={item._id} item={item} />
      ))}
    </div>
  );
};