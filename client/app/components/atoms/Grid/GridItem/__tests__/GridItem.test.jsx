import React from 'react';
import TestRenderer from 'react-test-renderer';

import GridItem from '../GridItem';

describe('<GridItem/>', () => {
  it('renders correctly with empty props', () => {
    const gridItemWrapper = TestRenderer.create(
      <GridItem>My content goes here</GridItem>
    ).toJSON();
    expect(gridItemWrapper).toMatchSnapshot();
  });
});
