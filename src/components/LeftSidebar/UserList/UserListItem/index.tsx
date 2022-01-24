import React, {FC} from 'react';

import { Loading } from '../../../shared/Loading';

import styles from './style.module.scss'

import {User} from "../../../types";
interface UserItem {
  user: User;
  handleClick: () => void;
  loading: boolean;
};

const UserListItem: FC<UserItem> = ({user, handleClick, loading}) => {

  const handleActiveClass = (e) => {
    const activeElement = document.querySelector('.user-list-item.active');
    if(activeElement){
      activeElement.classList.remove('active');
    }
    e.target.classList.add('active')
  };

  return (
    <div
      onClick={(e) => {
        handleClick();
        handleActiveClass(e)
      }}
      className={`user-list-item ${styles.userListItem}`}
    >
      {loading && (
        <Loading />
      )}

      <div className={styles.avatar} >
        <img src={user.avatar_url} alt={user.login}/>
      </div>

      <p className={styles.name}>{user.name || user.login}</p>

      <p>Repos: {user.repos || 0}</p>
    </div>
  );
};

export default UserListItem;
