import {useEffect, useState} from 'react';
import storage from '../helpers/storage';
import { getUserByLogin, getUserRepos } from '../services/github';

import {User, IRepo} from '../components/types'

export const useGetUser = () => {
  const [activeUser, setActiveUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<IRepo[]>(null);
  const [error, setError] = useState<string>('');
  const storagLogin = storage.load('gitHubLogin');

  const handleGetUserByLogin = async (login) => {
    try{
      storage.save('gitHubLogin', login);
      setLoading(true);
      const user = await getUserByLogin(login);
      const reposData = await getUserRepos(login);
      setActiveUser(user);
      setRepos(reposData);
      setLoading(false)
    }catch (err) {
      setLoading(false);
      setError(err.message);
      console.log('handleGetUserByLogin error', err);
    }
  };

  useEffect(() => {
    if(storagLogin){
      handleGetUserByLogin(storagLogin)
    }
  }, []);


  return {
    activeUser,
    repos,
    handleGetUserByLogin,
    loading,
    error,
  }
};
