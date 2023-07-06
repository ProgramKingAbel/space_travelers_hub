import React from 'react';
import useSelector from 'react-redux';

const MyProfilePage = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  console.log(reservedRockets);
 
  <div>MyProfilePage</div>
};

export default MyProfilePage;
