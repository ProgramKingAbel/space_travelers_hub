import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MissionItem from './MissionItem';
import { joinMission, LeaveMission } from '../redux/features/missions/missionsSlice';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();

beforeEach(() => {
  useDispatch.mockReturnValue(mockDispatch);
});

const mockMission = {
  id: 1,
  title: 'Mission 1',
  description: 'Description 1',
  statusCheck: true,
};

describe('MissionItem', () => {
  test('renders mission item correctly', () => {
    render(
      <MissionItem
        id={mockMission.id}
        title={mockMission.title}
        description={mockMission.description}
        statusCheck={mockMission.statusCheck}
      />
    );

    expect(screen.getByText(mockMission.title)).toBeInTheDocument();
    expect(screen.getByText(mockMission.description)).toBeInTheDocument();
    expect(screen.getByText('Active Member')).toBeInTheDocument();
    expect(screen.getByText('Leave Mission')).toBeInTheDocument();
  });

  test('calls joinMission action when Join Mission button is clicked', () => {
    render(
      <MissionItem
        id={mockMission.id}
        title={mockMission.title}
        description={mockMission.description}
        statusCheck={mockMission.statusCheck}
      />
    );

    const joinButton = screen.getByText('Join Mission');
    fireEvent.click(joinButton);

    expect(mockDispatch).toHaveBeenCalledWith(joinMission(mockMission.id));
  });

  test('calls LeaveMission action when Leave Mission button is clicked', () => {
    render(
      <MissionItem
        id={mockMission.id}
        title={mockMission.title}
        description={mockMission.description}
        statusCheck={mockMission.statusCheck}
      />
    );

    const leaveButton = screen.getByText('Leave Mission');
    fireEvent.click(leaveButton);

    expect(mockDispatch).toHaveBeenCalledWith(LeaveMission(mockMission.id));
  });
});
