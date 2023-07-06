import React from 'react';
import { useSelector } from 'react-redux';

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

    <div>MyProfilePage</div>;
};

export default MyProfilePage;
