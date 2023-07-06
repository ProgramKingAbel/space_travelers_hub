import React from 'react';
import useSelector from 'react-redux';

const MyProfilePage = () => {
  const { rockets } = useSelector((state) => state.rockets);
  <div>MyProfilePage</div>
};

export default MyProfilePage;
