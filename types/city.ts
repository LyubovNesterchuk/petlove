export type Location = {
  useCounty: "0" | "1";   // "1" — використовувати county
  stateEn: string;
  cityEn: string;
  countyEn?: string;
};

export type City = {
  _id: string;
  stateEn: string;
  cityEn: string;
  countyEn?: string;
  useCounty?: string;
};