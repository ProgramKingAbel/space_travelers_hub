// import '@testing-library/jest-dom';
// import React from 'react';
// // import axios from 'axios'
// import { Provider } from 'react-redux';
// import renderer from 'react-test-renderer';
// import MissionList from '../Pages/MissionList';
// import store from '../redux/store';

// describe('MissionList', () => { 
 
//   test('renders mission on the ui', async () =>{
//     //axios.get.mockResolvedValue({ data: mockMission });
// const tree = renderer.create(
//       <Provider store={store}>
//         <MissionList />
  
//       </Provider>
//     ).toJSON();

//     expect(tree).toMatchSnapshot()
//   });


// })


import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionList from '../Pages/MissionList.jsx';
import store from '../redux/store.js';

test('renders mission on the UI', async () => {
  render(
    <Provider store={store}>
      <MissionList />
    </Provider>
  );

  await waitFor(() => screen.getByText('Loading...'));


  expect(screen.getByText('Mission Title 1')).toBeInTheDocument();
  expect(screen.getByText('Mission Description 1')).toBeInTheDocument();


});