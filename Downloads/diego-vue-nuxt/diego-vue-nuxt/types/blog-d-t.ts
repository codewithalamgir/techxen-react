

export interface IBlogDT {
  id: number;
  img: string;
  date: string;
  author: string;
  title: string;
  category: string;
  page: string;
  time?: string;
  avatar?: string;
  designation?: string;
  tag?: string[];
  slider_images?: string[];
  desc?: string;
  slider?: boolean;
  comments?: number;
  video?:boolean;
}