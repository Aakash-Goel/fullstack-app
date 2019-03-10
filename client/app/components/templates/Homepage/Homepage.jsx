import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Head from '../../atoms/Head';
import withMaterial from '../../../lib/withMaterialUI';

import MessageForm from '../../organisms/MessageForm';

import { selectCount } from './HomepageSelectors';

const propTypes = {
  testData: PropTypes.any,
};

const defaultProps = {
  testData: {},
};

const Homepage = () => {
  return (
    <Fragment>
      <Head title="My website" description="My website description goes here" />

      <MessageForm />
    </Fragment>
  );
};

Homepage.propTypes = propTypes;
Homepage.defaultProps = defaultProps;

export const mapStateToProps = createStructuredSelector({
  testData: selectCount(),
});

export default connect()(withMaterial(Homepage));
