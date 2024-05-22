type TComment = {
  id: number;
  username: string;
  avatar: string;
  comment: string;
  likes: number;
  date: string;
};

export type TPosts = {
  id: number;
  username: string;
  avatar: string;
  likes: number;
  comments: TComment[];
};
