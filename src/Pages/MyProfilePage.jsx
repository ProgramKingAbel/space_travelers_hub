import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyProfilePage = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  console.log('reservedRockets', reservedRockets);

  const { spaceMission } = useSelector((state) => state.spaceMission);
  const missions = spaceMission.filter((mission) => mission.statusCheck === true);
  console.log('missions', missions);

  const { dragons } = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);
  console.log('reservedDragons', reservedDragons);

  return (
    <Container>
      <Row>
        <Col>
          <h2>My Rockets</h2>
          <ListGroup>
            {
            reservedRockets.map((rocket) => (
              <ListGroup.Item key={rocket.id} variant="light">{rocket.rocket_name}</ListGroup.Item>
            ))
            }
          </ListGroup>
        </Col>
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
      </Row>
    </Container>

  );
};

export default MyProfilePage;
