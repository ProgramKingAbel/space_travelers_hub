import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/features/rockets/rocketsSlice';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  console.log(rockets);
  return (
    <div>RocketsPage</div>
  );
};

export default RocketsPage;
