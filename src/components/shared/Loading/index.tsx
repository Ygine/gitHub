import React from "react";
import styles from "./styles.module.scss";

export const Loading = () => {
  return (
    <div className={'loader ' + styles.loader}>
      <div id={styles.circle2}>{''}</div>
    </div>
  );
};
