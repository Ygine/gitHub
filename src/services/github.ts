import {Api} from '../helpers/apiConfig';

export const searchUsers = async (query) => {
  return await Api({ url: `/search/users?q=${query}&per_page=10`});
};

export const getUserByLogin = async (login) => {
  return await Api({ url: `/users/${login}`});
};

export const getUserRepos = async (login) => {
  return await Api({ url: `/users/${login}/repos?per_page=100`});
};

