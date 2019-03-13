import React from 'react';
import { object } from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import checkboxStyles from './Checkbox.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  formControlLabelProps: object,
  checkboxProps: object,
};

/**
 * Define default prop values
 * @private
 */
const defaultProps = {
  formControlLabelProps: {},
  checkboxProps: {},
};

const CustomCheckbox = ({ ...props }) => {
  const { formControlLabelProps, checkboxProps } = props;

  return (
    <FormControlLabel
      {...formControlLabelProps}
      control={<Checkbox color="primary" {...checkboxProps} />}
    />
  );
};

CustomCheckbox.propTypes = propTypes;
CustomCheckbox.defaultProps = defaultProps;

export default withStyles(checkboxStyles)(CustomCheckbox);
