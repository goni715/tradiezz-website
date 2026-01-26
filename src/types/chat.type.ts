export interface IChat {
  _id: string;
  receiverId: string;
  fullName: string;
  profileImg: string;
  lastMessage: string;
  updatedAt: string; // ISO date string
};
