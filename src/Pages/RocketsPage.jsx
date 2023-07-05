import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { fetchRockets, booked, cancelReservation } from '../redux/features/rockets/rocketsSlice';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.rockets);
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  return (
    <Container>
      {
        rockets.map((rocket) => (
          <Row key={rocket.id} style={{ marginTop: '15px', marginBottom: '15px' }}>
            <Col sm={3}>
              <Image src={rocket.flickr_images[0]} thumbnail />
            </Col>
            <Col sm={9}>
              <Stack gap={1}>
                <h2>{rocket.rocket_name}</h2>
                {rocket.reserved ? (
                  <p>
                    <Badge bg="info" style={{ marginRight: '10px' }}>Reserved</Badge>
                    {rocket.description}
                  </p>
                ) : (
                  <p>{rocket.description}</p>
                )}
              </Stack>
              {rocket.reserved ? (
                <Button variant="outline-secondary" onClick={() => { dispatch(cancelReservation(rocket.id)); }}>Cancel Reservation</Button>
              ) : (
                <Button variant="primary" onClick={() => { dispatch(booked(rocket.id)); }}>Reserve Rocket</Button>
              )}
            </Col>
          </Row>
        ))
      }
    </Container>
  );
};

export default RocketsPage;
