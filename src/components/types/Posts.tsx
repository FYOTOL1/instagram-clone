interface IComment {
  id: number;
  username: string;
  avatar: string;
  comment: string;
  likes: number;
  date: string;
}

interface IPosts {
  id: number;
  username: string;
  avatar: string;
  likes: number;
  comments: IComment[];
}

export type { IPosts };
