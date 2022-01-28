import React, {useRef} from 'react';
import {useTypeSeleector} from './hooks/useTypeSeleector';

import { Container, Row, Col, Card } from 'reactstrap';

import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import { useGetUser } from './hooks/useGetUser';

function App() {
  const {activeUser, handleGetUserByLogin, loading, repos} = useGetUser();
  const ref = useRef<HTMLInputElement>(null);
  const state = useTypeSeleector(state => state);

  console.log('state', state);


  const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(ref.current.value);
  };

  return (
    <div className="App">

      <input type="text" ref={ref}/>
      <button onClick={handleClickBtn}>Some BTN</button>

      <Container>
        <Row>
          <Col>
            <Card>
              <LeftSidebar
                loading={loading}
                handleGetUserByLogin={handleGetUserByLogin}
              />
            </Card>
          </Col>
          <Col>
            {activeUser && (
              <Card>
                <RightSidebar
                  activeUser={activeUser}
                  repos={repos}
                />
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
