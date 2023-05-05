export interface IStory {
  id: number;
  by: string;
  url: string;
  time: number;
  title: string;
  kids: [];
  descendants: number;
  score: number;
  text: string;
}

export interface IComment {
  author: string;
  text: string;
  kids?: [];
  time: number;
}

export type News = {
  news: IStory;
};

export type Comment = {
  comment: IComment;
}

export interface ButtonProps {
  variant: "primary" | "secondary";
  children?: React.ReactNode;
  onClick: () => void;
}
