/* eslint-disable */
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import {joinMission,LeaveMission} from '../redux/features/missions/missionsSlice'


const MissionItem = ({id,title,description,statusCheck}) => {

// const {spaceMission}= useSelector((state) => state.spaceMission)
// console.log(statusCheck)

const myStatus = {
  backgroundColor: statusCheck ? '#379cf6' : '#36454F',
  display: 'block',
  width: '120px',
  border: '1px solid gray',
  color: 'white',
  alignSelf: 'center',
};
const styleRow = {
  backgroundColor: statusCheck? 'white' : '#E5E4E2',
};

 const dispatch = useDispatch()

  const [member, setMember] = useState(statusCheck? 'Active Member' : 'Not a Member')

  const joinMissionHandler = (e) =>{
    e.preventDefault()
    dispatch(joinMission(id))
    setMember('Active Member')
  }


  const leaveMissionHandler = (e) =>{
    e.preventDefault()
    dispatch(LeaveMission(id))

    setMember('Not Member')
    
  }

// console.log(spaceMission.statusCheck[0])

  return (
    <tr className="styleRow">  
    <th>{title}</th>
      <td>{description}</td>
      <td className='myStatus'>
        { ' '}
        <span>
        {member}
          </span></td>
      <td>
          {statusCheck ? (
          <Button variant="outline-danger" onClick={leaveMissionHandler}>
            Leave Mission
          </Button>
        ) : (
          <Button variant="outline-light" onClick={joinMissionHandler}>
            Join Mission
          </Button>
        )}
      </td>
      
  </tr>
  )
}
 

export default MissionItem;
