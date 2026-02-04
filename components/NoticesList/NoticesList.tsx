import { NoticesItem } from '../NoticesItem/NoticesItem';
import styles from './NoticesList.module.css';
import { Notice } from '@/types/notice';

interface Props {
  notices: Notice[];
}

export const NoticesList = ({ notices }: Props) => (
  <ul className={styles.list}>
    {notices.map((item) => (
      <NoticesItem key={item._id} notice={item} />
    ))}
  </ul>
);