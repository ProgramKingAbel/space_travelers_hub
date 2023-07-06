import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchMission } from '../redux/features/missions/missionsSlice';
import MissionItem from './MissionItem';

const MissionList = () => {
  const dispatch = useDispatch();
  const { spaceMission, isLoading, error } = useSelector((state) => state.spaceMission);

  useEffect(() => {
    if (spaceMission.length === 0) {
      dispatch(fetchMission());
    }
  }, [dispatch, spaceMission.length]);

  if (isLoading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  } if (error) {
    return (
      <div>
        <h4>
          Error:
          {error}
        </h4>
      </div>
    );
  } if (Object.keys(spaceMission).length === 0) {
    return (
      <div>
        <h3>No missions found</h3>
      </div>
    );
  }
  const missionData = Object.values(spaceMission);
  return (
    <div className="mx-4">
      <Table striped bordered hover responsive variant="light" className="mt-4">
        <thead>
          <tr>
            <th>Mission</th>
            <th className="text-center">Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>

          {
            missionData.map((item) => (

              <MissionItem
                key={item.mission_id}
                id={item.mission_id}
                title={item.mission_name}
                description={item.description}
                statusCheck={item.statusCheck}
              />
            ))
          }

        </tbody>

      </Table>
    </div>
  );
};

export default MissionList;
