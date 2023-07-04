/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMission } from '../redux/features/missions/missionsSlice';
import MissionItem from './MissionItem';
import Table from 'react-bootstrap/Table';


const MissionList = () => {
  const dispatch = useDispatch()
  const {spaceMission,isLoading,error} = useSelector((state)=> state.spaceMission)

  useEffect(()=>{
    dispatch(fetchMission())
  },[dispatch])

  if (isLoading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h4>Error: {error}</h4>
      </div>
    );
  } else if (Object.keys(spaceMission).length === 0) {
    return (
      <div>
        <h3>No books found</h3>
      </div>
    );
  } else{
    const missionData = Object.values(spaceMission);
    return(
      <div>
        <Table  responsive striped bordered hover>
       <thead>
            <tr>
              <th>Mission</th>
              <th colSpan={4}>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          </Table>
        {
            missionData.map((item)=>(
            <MissionItem 
            id={item.mission_id}
            title={item.mission_name}
            description={item.description}
            /> 
            )
            )
          }
      </div>)
  }

  }
  

 




export default MissionList;
