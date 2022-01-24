import React from 'react';

import { Container, Row, Col, Card } from 'reactstrap';

import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import { useGetUser } from './hooks/useGetUser';

function App() {
  const {activeUser, handleGetUserByLogin, loading, repos} = useGetUser();

  return (
    <div className="App">

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
