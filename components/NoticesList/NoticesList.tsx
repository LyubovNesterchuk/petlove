import { NoticesItem } from '../NoticesItem/NoticesItem';
import styles from './NoticesList.module.css';

export const NoticesList = ({ notices }: { notices: any[] }) => (
  <ul className={styles.list}>
    {notices.map((item) => (
      <NoticesItem key={item.id} notice={item} />
    ))}
  </ul>
);