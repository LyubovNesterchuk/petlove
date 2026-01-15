export type WeekDay =
  | "Mon"
  | "Tue"
  | "Wed"
  | "Thu"
  | "Fri"
  | "Sat"
  | "Sun";

export type WorkDay = {
  day: WeekDay;
  from?: string;    
  to?: string;      
  isOpen: boolean;
};

export type Friend = {
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: WorkDay[];
};