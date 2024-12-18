export interface Post {
  id: number;
  title: string;
  content: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  age: number;
}

export interface Response {
  posts: Post[];
}


