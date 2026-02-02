'use client';

import { useEffect, useState } from 'react';
import FriendsItem from '../FriendsItem/FriendsItem';
import styles from './FriendsList.module.css';
import { Friend } from '@/types/friend';

export default function FriendsList() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch(
          'https://petlove.b.goit.study/api/friends'
        );
        const data = await res.json();
        setFriends(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <FriendsItem key={friend._id} friend={friend} />
      ))}
    </ul>
  );
}