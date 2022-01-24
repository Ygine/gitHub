import React from 'react';
import List from '../shared/List';
import SerchBar from '../shared/SerchBar';

import { useSearchUser } from '../../hooks/useSearchUser';
import UserListItem from "./UserItem";

import {User} from "../types";
import styles from "./style.module.scss";

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

      <List
        items={users}
        className={styles.listWrap}
        renderItem={
          (user: User) => <UserListItem
            user={user}
            loading={loading}
            handleClick={handleGetUserByLogin}
            key={user.login}
        />}
      />



    </div>
  );
};

export default LeftSidebar;
