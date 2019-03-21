import React from 'react';
import renderer from 'react-test-renderer';
// import { createShallow } from '@material-ui/core/test-utils';

import Button from '../Button';

describe('<Button/>', () => {
  it('renders correctly', () => {
    const props = {
      color: 'primary',
      classes: { button: true },
    };
    const tree = renderer
      .create(<Button {...props} ariaLabel="demo-aria" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
