import {useEffect, useState} from 'react';
import { searchUsers } from '../services/github';
import storage from '../helpers/storage';

export const useSearchUser = () => {
  const [users, setUsers] = useState([]);
  const querySearch = storage.load('querySearch');

  const handleSearchUsers = async (query) => {
    try{
      storage.save('querySearch', query);
      const users = await searchUsers(query);

      setUsers(users.items)
    }catch (err) {
      console.log('handleSearchUsers error', err);
    }
  };

  useEffect(() => {
    if(querySearch){
      handleSearchUsers(querySearch)
    }
  }, []);

  return {
    users,
    handleSearchUsers,
  }
};
