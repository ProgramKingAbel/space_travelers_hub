import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const MyProfilePage = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  const { spaceMission } = useSelector((state) => state.spaceMission);
  const missions = spaceMission.filter((mission) => mission.statusCheck === true);

  const { dragons } = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);

  return (
    <Container className="mt-4">
      <Row>
        {reservedRockets.length > 0 ? (
          <Col>
            <h2>My Rockets</h2>
            <ListGroup>
              {
            reservedRockets.map((rocket) => (
              <ListGroup.Item key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>
            ))
              }
            </ListGroup>
          </Col>
        ) : (
          <Col>
            <h5>
              Rockets
              {' '}
              <Badge bg="info">No rocket reserved</Badge>
            </h5>
          </Col>
        )}
        {reservedDragons.length > 0 ? (
          <Col>
            <h2>My Dragons</h2>
            <ListGroup>
              {
            reservedDragons.map((dragon) => (
              <ListGroup.Item key={dragon.id}>{dragon.name}</ListGroup.Item>
            ))
              }
            </ListGroup>
          </Col>
        ) : (
          <Col>
            <h5>
              Dragons
              {' '}
              <Badge bg="info">No dragon reserved</Badge>
            </h5>
          </Col>
        )}
        {missions.length > 0 ? (
          <Col>
            <h2>My Missions</h2>
            <ListGroup>
              {
            missions.map((mission) => (
              <ListGroup.Item key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
            ))
            }
            </ListGroup>
          </Col>
        ) : (
          <Col>
            <h5>
              Missions
              {' '}
              <Badge bg="info">Not registered on Mission</Badge>
            </h5>
          </Col>
        )}
      </Row>
    </Container>

  );
};

export default MyProfilePage;
