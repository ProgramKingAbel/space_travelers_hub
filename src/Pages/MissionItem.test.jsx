// import PropTypes from 'prop-types';
// // import axios from 'axios'
// import { render, fireEvent, screen } from '@testing-library/react';
// // import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom';
// import MissionItem from "./MissionItem"

// const Button = ({ onClick, children }) => (
//   <button type="button" onClick={onClick}>{children}</button>
// );

// describe("Mission component status check <MissionItem />", () => {
//   test('Snapshot of the MissionItem page', () => {
//     const component = render.create(<MissionItem />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   test('calls onClick prop when clicked', () => {
//     const handleClick = jest.fn();
//     render(<Button onClick={handleClick}>member</Button>);
//     fireEvent.click(screen.getByText(/ActiveMember/i));
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });
// });

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.string.isRequired,
// };
