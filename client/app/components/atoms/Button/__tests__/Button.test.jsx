import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import Button from '../Button';

describe('<Button/>', () => {
  it('renders correctly with props', () => {
    const styles = {
      bgColor: {
        backgroudColor: '#f9a825',
      },
    };
    const tree = renderer
      .create(
        <Button color="primary" style={styles.bgColor} aria-label="Checkout">
          Click Here
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with empty props', () => {
    const shallowRender = new ShallowRenderer();
    const button = shallowRender.render(<Button />);
    expect(button).toMatchSnapshot();
  });
});
