import React from 'react';
import TestRenderer from 'react-test-renderer';

import GridContainer from '../GridContainer';

describe('<GridContainer/>', () => {
  it('renders correctly with empty props', () => {
    const gridContainerWrapper = TestRenderer.create(
      <GridContainer>My content goes here</GridContainer>
    ).toJSON();
    expect(gridContainerWrapper).toMatchSnapshot();
  });
});
