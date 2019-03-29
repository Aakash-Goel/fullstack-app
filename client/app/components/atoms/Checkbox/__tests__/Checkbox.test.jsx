import React from 'react';
import TestRenderer from 'react-test-renderer';

import Checkbox from '../Checkbox';

describe('<Checkbox/>', () => {
  it('renders correctly with empty props', () => {
    const checkboxWrapper = TestRenderer.create(<Checkbox />).toJSON();
    expect(checkboxWrapper).toMatchSnapshot();
  });
});
