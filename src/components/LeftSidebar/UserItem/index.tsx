import React, {FC, useRef} from 'react';

import { Loading } from '../../shared/Loading';

import styles from './style.module.scss'

import {User} from "../../types";
interface UserItem {
  user: User;
  handleClick: (str: string) => void;
  loading: boolean;
};

const UserListItem: FC<UserItem> = ({user, handleClick, loading}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleActiveClass = (e) => {
    const activeElement = document.querySelector('.user-list-item.active');

    if(activeElement){
      activeElement.classList.remove('active');
    }
    ref.current.closest('.user-list-item ').classList.add('active')
  };

  return (
    <div
      ref={ref}
      onClick={(e) => {
        handleClick(user.login);
        handleActiveClass(e);
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
