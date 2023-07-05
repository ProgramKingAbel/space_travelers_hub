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
    if(spaceMission.length === 0){
      dispatch(fetchMission())
    }
   
  },[dispatch,spaceMission.length])

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
        <h3>No missions found</h3>
      </div>
    );
  } else{
    const missionData = Object.values(spaceMission);
    return(
     
        <Table striped bordered hover variant="dark">
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
            missionData.map((item)=>(
             
            <MissionItem 
            id={item.mission_id}
            title={item.mission_name}
            description={item.description}
            statusCheck={item.statusCheck}
            /> 
            )
            
            )
          }
        
          </tbody>
        
</Table>
    
    )}

  }
  

 




export default MissionList;
