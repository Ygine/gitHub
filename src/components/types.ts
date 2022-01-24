export type SearchBarType = {
  placeholder: string;
  onSearch: (str: string) => void
}

export interface User {
  name: string;
  avatar_url: string;
  email: string;
  location: string;
  created_at: string;
  followers: number;
  following: number;
  login: string;
  repos?: number;
}

export interface IRepo {
  name: string;
  html_url: string;
  id: string;
  forks: string;
  stargazers_count: string;
  login: string;
}


