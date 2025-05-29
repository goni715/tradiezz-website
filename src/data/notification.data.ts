/* eslint-disable @typescript-eslint/no-unused-vars */

export interface Notification {
  id: string;
  name: string;
  title: string;
  timestamp: string;
  read: boolean;
}

// Generate unique ID
const generateId = () => {
  return Math.random().toString(36).substring(2, 11);
};

// Generate random timestamp within the last 30 days
const generateTimestamp = () => {
  const now = new Date();
  const randomDaysAgo = Math.floor(Math.random() * 30);
  const randomHoursAgo = Math.floor(Math.random() * 24);
  const randomMinutesAgo = Math.floor(Math.random() * 60);
  
  now.setDate(now.getDate() - randomDaysAgo);
  now.setHours(now.getHours() - randomHoursAgo);
  now.setMinutes(now.getMinutes() - randomMinutesAgo);
  
  return now.toISOString();
};

// Companies
const companies = [
  "Apple", 
  "Google", 
  "Microsoft", 
  "Amazon", 
  "Meta", 
  "Tesla", 
  "Netflix", 
  "Uber", 
  "Airbnb", 
  "Spotify",
  "Adobe", 
  "Twitter", 
  "LinkedIn", 
  "IBM", 
  "Intel", 
  "Oracle", 
  "Samsung", 
  "Sony", 
  "Nvidia", 
  "Salesforce",
  "Delta It.", 
  "ZPSC Ltd.", 
  "BBCI", 
  "Pran"
];

// Generate mock notifications
export const mockNotifications: Notification[] = Array.from({ length: 150 }, (_, i) => {
  const companyName = companies[Math.floor(Math.random() * companies.length)];
  
  return {
    id: generateId(),
    name: companyName,
    title: `You have a new profile access request from [Employer Name]. Do you want to allow them to view your profile?`,
    timestamp: generateTimestamp(),
    read: Math.random() > 0.3, // 30% chance of being unread
  };
}).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()); // Sort by timestamp (newest first)