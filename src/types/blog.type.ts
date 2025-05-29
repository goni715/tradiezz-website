export type IBlog = {
  id: number;
  title: string;
  date: string; // You can use Date if you parse it from string
  comments: number;
  image: string;
  excerpt: string;
};
