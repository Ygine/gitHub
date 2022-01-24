import React, {useState, FC} from 'react';
import SerchBar from '../shared/SerchBar';
import UserInfo from './UserInfo';
import RepoList from "./RepoList";

import {User, IRepo} from "../types";

interface SidebarProps {
  activeUser: User;
  repos: IRepo[];
}

const RightSidebar: FC<SidebarProps> = ({activeUser, repos}) => {
  const [filterText, setFilterText] = useState('');
  const placeholderText = 'Serach user repositories';

  const handleSearch = (text: string): void => {
    setFilterText(text);
  };

  const filteredRepos = (str: string): IRepo[] => {
    return repos ? repos.filter(repo => {
      return repo.name.toLowerCase().includes(str.toLowerCase())
    }) : []
  };

  return (
    <div className="d-flex flex-column">
      <div className="p-4">
        <h2 className="text-center mb-3">User Info</h2>

        <UserInfo activeUser={activeUser}/>

        <SerchBar onSearch={handleSearch} placeholder={placeholderText}/>
      </div>

      <RepoList repos={filteredRepos(filterText)}/>
    </div>
  );
};

export default RightSidebar;
