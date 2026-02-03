import Image from 'next/image';
import styles from './FriendsItem.module.css';
import { Friend } from '@/types/friend';
 import { getWorkTimeLabel } from '@/utils/getWorkTimeLabel';
 
interface Props {
  friend: Friend;
}

export default function FriendsItem({ friend }: Props) {


const workTimeLabel = getWorkTimeLabel(friend.workDays);

  return (
    <li className={styles.card}>
      <div className={styles.logoWrap}>
        <Image
          src={friend.imageUrl}
          alt={friend.title}
          width={80}
          height={80}
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{friend.title}</h3>

        {workTimeLabel && (
        <span className={styles.badge}>
            {workTimeLabel}
        </span>
        )}
        
        <ul className={styles.contacts}>
            
          {friend.email && (
            <li>
              Email:{' '}
              <a
                href={`mailto:${friend.email}`}
                className={styles.link}
              >
                {friend.email}
              </a>
            </li>
          )}

          {friend.address && (
            <li>
              Address:{' '}
              <a
                href={friend.addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {friend.address}
              </a>
            </li>
          )}

          {friend.phone && (
            <li>
              Phone:{' '}
              <a
                href={`tel:${friend.phone}`}
                className={styles.link}
              >
                {friend.phone}
              </a>
            </li>
          )}
        </ul>
      </div>
    </li>
  );
}
