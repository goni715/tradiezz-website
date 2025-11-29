export type IBlog = {
  _id: string;
  title: string;
  categoryId: string;
  category: string;
  image: string;
  view: number;
  date: string; // You can use Date if you parse it from string
  comments: number;
  excerpt: string;
  description: string;
  createdAt: string;
  updatedAt: string;
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
