export type Species =
  | 'dog'
  | 'cat'
  | 'monkey'
  | 'bird'
  | 'snake'
  | 'turtle'
  | 'lizard'
  | 'frog'
  | 'fish'
  | 'ants'
  | 'bees'
  | 'butterfly'
  | 'spider'
  | 'scorpion';

export type Category = 'found' | 'free' | 'lost' | 'sell';

export type Sex = 'female' | 'male' | 'multiple' | 'unknown';

export type Location = {
  _id: string;
  stateEn: string;
  cityEn: string;
};

export type User = {
  _id: string;
  email: string;
  phone: string;
};

export type Notice = {
  _id: string;
  species: Species;
  category: Category;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: Sex;
  location: Location;
  imgURL: string;
  user: User;
  popularity: number;
  createdAt: string;
  updatedAt: string;
};

export type NoticeCard = Notice & {
  isFavorite: boolean;
};