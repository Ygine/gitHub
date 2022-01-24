import React, {FC} from 'react';
import UserListItem from './UserListItem';
import styles from './style.module.scss';

import {User} from "../../types";

interface UserList {
  users: User[];
  handleGetUserByLogin: (str: string) => void;
  loading: boolean;
};

const UserList: FC<UserList> = ({users, handleGetUserByLogin, loading}) => {

  const handleActiveClass = (e) => {
    const activeElement = document.querySelector('.user-list-item.active');

    if(activeElement){
      activeElement.classList.remove('active');
    }
    e.target.closest('.user-list-item ').classList.add('active')
  };

  return (
    <div className={styles.listWrap}>
      {users && users.map(user => (
        <UserListItem
          loading={loading}
          handleClick={(e) => {
            handleGetUserByLogin(user.login);
            handleActiveClass(e);
          }}
          key={user.login}
          user={user}
        />
      ))}
    </div>
  );
};

export default UserList;
