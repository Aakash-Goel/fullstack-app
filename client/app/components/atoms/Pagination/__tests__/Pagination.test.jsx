import React from 'react';
import TestRenderer from 'react-test-renderer';

import Pagination from '../Pagination';

describe('<Pagination/>', () => {
  it('renders correctly', () => {
    const paginationWrapper = TestRenderer.create(
      <Pagination
        pages={[
          { text: 1 },
          { text: '...' },
          { active: true, text: 5 },
          { text: 6 },
          { text: 7 },
          { text: '...' },
          { text: 11 },
        ]}
      />
    ).toJSON();
    expect(paginationWrapper).toMatchSnapshot();
  });

  it('renders correctly when onclick props is passed', () => {
    const onClick = jest.fn();
    const paginationWrapper = TestRenderer.create(
      <Pagination
        pages={[
          { text: 1 },
          { text: '...' },
          { active: true, text: 5 },
          { onClick, text: 6 },
          { text: 7 },
          { text: '...' },
          { text: 11 },
        ]}
      />
    ).toJSON();
    expect(paginationWrapper).toMatchSnapshot();
  });
});
