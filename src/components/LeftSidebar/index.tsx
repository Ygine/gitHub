import React from 'react';
import UserList from './UserList';
import SerchBar from '../shared/SerchBar';

import { useSearchUser } from '../../hooks/useSearchUser';

interface SidebarProps {
  handleGetUserByLogin: (str: string) => void;
  loading: boolean;
}

const LeftSidebar = ({handleGetUserByLogin, loading}: SidebarProps) => {
  const {handleSearchUsers, users} = useSearchUser();

  const handleSearch = (text): void => {
    handleSearchUsers(text);
  };

  return (
    <div>
      <div  className="p-4 pb-0 mb-4">
        <h2 className="text-center mb-3">Search user</h2>

        <SerchBar onSearch={handleSearch} placeholder={'Search User'}/>
      </div>

      <UserList
        loading={loading}
        handleGetUserByLogin={handleGetUserByLogin}
        users={users}
      />
    </div>
  );
};

export default LeftSidebar;
