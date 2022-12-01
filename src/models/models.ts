export type BookModel = {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published: string;
  publisher: string;
}

export type ServerResponse<T> = {
  status: string;
  code: number;
  total: number;
  data: T[];
};