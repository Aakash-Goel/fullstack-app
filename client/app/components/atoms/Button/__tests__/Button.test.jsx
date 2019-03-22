import React from 'react';
import renderer from 'react-test-renderer';

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
        <Button
          color="primary"
          style={styles.bgColor}
          variant="fab"
          aria-label="Checkout"
        >
          Click Here
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with empty props', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
