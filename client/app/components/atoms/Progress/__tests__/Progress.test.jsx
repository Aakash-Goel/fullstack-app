import React from 'react';
import TestRenderer from 'react-test-renderer';

import Progress from '../Progress';

describe('<Progress />', () => {
  it('renders correctly', () => {
    const progressWrapper = TestRenderer.create(<Progress />).toJSON();
    expect(progressWrapper).toMatchSnapshot();
  });
});
