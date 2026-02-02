
import { Title } from '@/components/Title/Title';
import FriendsList from '@/components/FriendsList/FriendsList';

export const metadata = {
  title: 'Our friends | Petlove',
  description: 'Our trusted partners and friends',
};

export default function FriendsPage() {
  return (
    <main className="container">
      <Title text="Our friends" />
      <FriendsList />
    </main>
  );
}