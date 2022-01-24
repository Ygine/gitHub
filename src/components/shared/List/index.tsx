import React from 'react';
import styles from './style.module.scss';

interface ListProps<T> {
  items: T[];
  className: string;
  renderItem: (item: T) => React.ReactNode;
};

export default function List<T>(props: ListProps<T>){

  return (
    <div className={props.className}>
      {props.items && props.items.map(props.renderItem)}
    </div>
  );
};
