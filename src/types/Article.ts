import { Category, Tag } from '.';

export interface Article {
  id: string;

  title: string;

  brief: string;

  cover: string;

  contents: string;

  author: string;

  category: Category;

  tags: Tag[];

  created: string;

  updated: string;

  times: number;
}
