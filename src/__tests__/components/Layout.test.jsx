import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Layout from '../../Components/Layout';

describe('Layout', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Layout />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
