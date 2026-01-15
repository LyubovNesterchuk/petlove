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

export type Sex = "female" | "male" | "multiple" | "unknown";

export type Pet = {
  name: string;
  title: string;
  imgURL: string;
  species: Species;
  birthday: string; // ISO: YYYY-MM-DD
  sex: Sex;
};