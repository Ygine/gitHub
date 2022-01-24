import React, {FC} from 'react';
import {Container, Card, CardImg, CardBody} from "reactstrap";
import Moment from 'react-moment';

import styles from './style.module.scss'

import { User } from "../../types";

type UserType = {
  activeUser: User;
};

const UserInfo: FC<UserType> = ({activeUser}) => {

  return (
    <Container className={'p-0 mb-4 ' + styles.userBlock}>
      <Card className={styles.userCard}>
        <CardImg top width="100%" src={activeUser.avatar_url} alt="Card image cap" />
        <CardBody className={styles.userCardBody}>
          <div className={styles.userText}>
            <p><b> Name: </b> {activeUser.name}</p>
            <p><b> Email: </b> {activeUser.email || '-'}</p>
            <p><b> location: </b> {activeUser.location || '-'}</p>
            <p>
              <b> Join Date: </b>
              <Moment format="DD.MM.YYYY">{activeUser.created_at}</Moment>
            </p>
            <p><b> Followers: </b> {activeUser.followers}</p>
            <p><b> Following: </b> {activeUser.following}</p>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default UserInfo;
