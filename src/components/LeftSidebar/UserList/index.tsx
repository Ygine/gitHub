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

  return (
    <div className={styles.listWrap}>
      {users && users.map(user => (
        <UserListItem
          loading={loading}
          handleClick={() => handleGetUserByLogin(user.login)}
          key={user.login}
          user={user}
        />
      ))}
    </div>
  );
};

export default UserList;
