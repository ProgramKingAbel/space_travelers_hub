import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { joinMission, LeaveMission } from '../../redux/features/missions/missionsSlice';
import { MissionItem } from '../../Components';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('MissionItem', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders mission information correctly', () => {
    const mission = {
      id: '1',
      title: 'Mission 1',
      description: 'Mission 1 description',
      statusCheck: true,
    };

    const { getByText, getAllByTestId } = render(
      <table>
        <tbody>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <MissionItem {...mission} />
        </tbody>
      </table>,
    );

    expect(getByText(mission.title)).toBeInTheDocument();
    expect(getByText(mission.description)).toBeInTheDocument();

    const memberButtons = getAllByTestId('member-button');
    const memberButton = memberButtons[0];
    expect(memberButton).toBeInTheDocument();
    expect(memberButton).toHaveTextContent('Active Member');

    const leaveButton = getByText('Leave Mission');
    expect(leaveButton).toBeInTheDocument();
    fireEvent.click(leaveButton);
    expect(mockDispatch).toHaveBeenCalledWith(LeaveMission(mission.id));

    const { getByText: getByTextSecondRender, getAllByTestId: getAllByTestIdSecondRender } = render(
      <table>
        <tbody>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <MissionItem {...mission} statusCheck={false} />
        </tbody>
      </table>,
    );

    const notMemberButtons = getAllByTestIdSecondRender('member-button');
    const notMemberButton = notMemberButtons[0];
    expect(notMemberButton).toBeInTheDocument();
    expect(notMemberButton).toHaveTextContent('Not Member');

    const joinButton = getByTextSecondRender('Join Mission');
    expect(joinButton).toBeInTheDocument();
    fireEvent.click(joinButton);
    expect(mockDispatch).toHaveBeenCalledWith(joinMission(mission.id));
  });
});
