export interface IBook {
  issueYear: string;
  rating: number;
  title: string;
  authors: string[];
  image: { url: string };
  categories: string[];
  id: number;
  booking: {
    id: number;
    order: boolean;
    dateOrder: string;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
  };
  delivery: {
    id: number;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedTo: string;
    recipientId: number;
    recipientFirstName: string;
    recipientLastName: string;
  };
  histories: Array<{ id: number; userId: number }>;
}

export interface Error {
  status: number;
  name: string;
  message: string;
  details: any;
}

export enum Status {
  LOADING = "loading",
  COMLETED = "completed",
  ERROR = "error",
}

export interface BooksState {
  books: IBook[];
  loading: boolean;
  status: Status;
  book?: ILinkedBook;
}

export interface IResponce {
  books: IBook[];
  book: ILinkedBook;
}

export interface Image {
  url: string;
}

export interface User {
  commentUserId: number;
  firstName: string;
  lastName: string;
  avatarUrl?: any;
}

export interface Comment {
  id: number;
  rating: number;
  text: string;
  createdAt: Date;
  user: User;
}

export interface ILinkedBook {
  id: number;
  title: string;
  rating: number;
  issueYear: string;
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  authors: string[];
  images: Image[];
  categories: string[];
  comments: Comment[];
  booking?: any;
  delivery?: any;
  histories?: any;
}

export interface ICategory {
  name: string;
  path: string;
  id: number;
}
export interface IStateCategoty{
  categorys: ICategory[];
  loading: boolean;
  status: Status | undefined;
}
