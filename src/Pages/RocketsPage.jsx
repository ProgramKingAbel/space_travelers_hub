import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/features/rockets/rocketsSlice';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <ul>
      {
        rockets.map((rocket) => (
          <li key={rocket.id}>{ rocket.rocket_name }</li>
        ))
      }
    </ul>
  );
};

export default RocketsPage;
