import React from 'react';
import TestRenderer from 'react-test-renderer';

import Input from '../Input';

describe('<Input />', () => {
  it('renders correctly', () => {
    const inputWrapper = TestRenderer.create(
      <Input
        labelText="Required"
        formControlProps={{
          required: true,
        }}
      />
    ).toJSON();
    expect(inputWrapper).toMatchSnapshot();
  });

  it('renders correctly if formControlProps and labelText is not passed', () => {
    const inputWrapper = TestRenderer.create(<Input />).toJSON();
    expect(inputWrapper).toMatchSnapshot();
  });

  it('renders correctly in error state', () => {
    const inputWrapper = TestRenderer.create(
      <Input
        labelText="Error Input Prop"
        inputProps={{
          error: true,
          'aria-label': 'Description',
        }}
      />
    ).toJSON();
    expect(inputWrapper).toMatchSnapshot();
  });

  it('renders correctly in success state', () => {
    const inputWrapper = TestRenderer.create(
      <Input labelText="Success Prop" id="success" success />
    ).toJSON();
    expect(inputWrapper).toMatchSnapshot();
  });
});
