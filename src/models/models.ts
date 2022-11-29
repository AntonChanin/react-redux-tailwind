export type DataRow = {
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

export type ServerResponse = {
  status: string;
  code: number;
  total: number;
  data: DataRow[];
};