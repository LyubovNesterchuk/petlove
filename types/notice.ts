export type Species =
  | "dog"
  | "cat"
  | "monkey"
  | "bird"
  | "snake"
  | "turtle"
  | "lizard"
  | "frog"
  | "fish"
  | "ants"
  | "bees"
  | "butterfly"
  | "spider"
  | "scorpion";

export type Category = "found" | "free" | "lost" | "sell";

export type Sex = "female" | "male" | "multiple" | "unknown";

export type Location = {
  stateEn: string;
  cityEn: string;
};

export type User = {
  email: string;
  phone: string;
};

export type Notice = {
  species: Species;
  category: Category;
  price: number;
  title: string;
  name: string;
  birthday: string; 
  comment: string;
  sex: Sex;
  location: Location;
  imgURL: string;
  user: User;
  popularity: number;
};

// export type Pet = Pick<
//   Notice,
//   "name" | "title" | "imgURL" | "species" | "birthday" | "sex"
// >;