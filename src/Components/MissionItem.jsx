import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { joinMission, LeaveMission } from '../redux/features/missions/missionsSlice';

const MissionItem = ({
  id, title, description, statusCheck,
}) => {
  const dispatch = useDispatch();

  const [member, setMember] = useState(statusCheck ? 'Active Member' : 'Not a Member');

  const joinMissionHandler = (e) => {
    e.preventDefault();
    dispatch(joinMission(id));
    setMember('Active Member');
  };

  const leaveMissionHandler = (e) => {
    e.preventDefault();
    dispatch(LeaveMission(id));

    setMember('Not Member');
  };

  return (
    <tr>
      <th>{title}</th>
      <td>{description}</td>
      <td>
        { ' '}
        <span data-testid="member-button">
          {
          statusCheck ? (
            <Button variant="primary" style={{ width: '140px' }}>
              {member}
            </Button>
          ) : (
            <Button variant="secondary" style={{ width: '140px' }}>
              {member}
            </Button>
          )
        }
        </span>
      </td>
      <td>
        {statusCheck ? (
          <Button variant="outline-danger" style={{ width: '140px' }} onClick={leaveMissionHandler}>
            Leave Mission
          </Button>
        ) : (
          <Button variant="outline-secondary" style={{ width: '140px' }} onClick={joinMissionHandler}>
            Join Mission
          </Button>
        )}
      </td>

    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  statusCheck: PropTypes.bool,
};

MissionItem.defaultProps = {
  statusCheck: false,
};

export default MissionItem;
