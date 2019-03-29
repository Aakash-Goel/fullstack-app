import React from 'react';
import TestRenderer from 'react-test-renderer';

import Head from '../Head';

describe('<Head/>', () => {
  it('renders correctly', () => {
    const headWrapper = TestRenderer.create(
      <Head title="title comes here" description="description goes here" />
    ).toJSON();
    expect(headWrapper).toMatchSnapshot();
  });
});
