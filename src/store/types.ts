export interface UserState {
  users: any[];
  test?: string;
}

export interface UserAction {
  type: string,
  payload?: any,
};
