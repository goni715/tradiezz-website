export type IBlog = {
  id: number;
  title: string;
  date: string; // You can use Date if you parse it from string
  comments: number;
  image: string;
  excerpt: string;
};

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  comments: number;
}

export type Category = 'Industry Insights' | 'Career & Skills' | 'Business & Hiring' | 'Mindset & Growth' | 'Real Stories';
