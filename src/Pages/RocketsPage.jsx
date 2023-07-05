import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { booked } from '../redux/features/rockets/rocketsSlice';
import { fetchRockets } from '../redux/features/rockets/rocketsSlice';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

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
                <p>{rocket.description}</p>
              </Stack>
              <Button variant="primary" onClick={dispatch(booked(rocket.id))}>Reserve Rocket</Button>
            </Col>
          </Row>
        ))
      }
    </Container>
  );
};

export default RocketsPage;
