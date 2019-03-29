import React from 'react';
import TestRenderer from 'react-test-renderer';

import Switch from '../Switch';

describe('<Switch/>', () => {
  it('renders correctly', () => {
    const switchWrapper = TestRenderer.create(<Switch />).toJSON();
    expect(switchWrapper).toMatchSnapshot();
  });
});
