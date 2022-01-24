import {useEffect, useState} from 'react';
import storage from '../helpers/storage';
import { getUserByLogin, getUserRepos } from '../services/github';

export const useGetUser = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState('');
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
