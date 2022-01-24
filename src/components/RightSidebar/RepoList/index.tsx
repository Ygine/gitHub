import React, {FC} from 'react';

import styles from "./style.module.scss";

import {IRepo} from "../../types";
type RepoList = {
  repos: IRepo[]
};

const RepoList: FC<RepoList> = ({repos}) => {

  return (
    <div className={"d-flex flex-column " + styles.repoListWrap}>
      {repos && repos.map(repo => (
        <a
          rel="noreferrer noopener"
          target="_blank"
          href={repo.html_url}
          key={repo.id}
          className={`${styles.repoListItem}`}
        >
          <p>{repo.name}</p>

          <div className={styles.repoListInfo}>
            <p className="d-flex justify-content-end">{repo.forks} forks </p>
            <p className="d-flex justify-content-end">{repo.stargazers_count} stars</p>
          </div>
        </a>
      ))}

    </div>
  );
};

export default RepoList;
