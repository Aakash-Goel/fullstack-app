import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('<Button/>', () => {
  it('renders correctly', () => {
    const props = {
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
