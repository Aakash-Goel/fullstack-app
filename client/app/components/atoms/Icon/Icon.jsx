/**
 * Themed Icon
 */

import React from 'react';
import classnames from 'classnames';
import { object, string } from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import iconStyles from './Icon.style';

/**
 * @param {object} [classes] - The style definition available here.
 * @param {string} type The name of the icon file in ./app/assets/icons
 * @param {string} className Allows for custom styling to be passed to the component.
 * @param {string} height Determines the height of icon
 * @param {string} width Determines the width of icon
 * @param {string} focusable Determines whether an icon can be focused on - Icon in a button VS a standalone icon
 */
const propTypes = {
  classes: object.isRequired,
  type: string.isRequired,
  className: string,
  height: string,
  width: string,
  focusable: string,
};

const defaultProps = {
  className: '',
  height: '18px',
  width: '18px',
  focusable: 'false', // Stop SVGs from gaining focus in ie11
};

/**
 * A component that renders svg icon files
 *
 * @author aakash
 *
 *
 * For more information about the component please refer to
 * the README: docs/storybook/icon.md
 * @example ./stories/Icon.stories.jsx
 */
const Icon = ({ classes, type, className, height, width, focusable }) => {
  return (
    <svg
      className={classnames(classes.icon, className)}
      height={height}
      width={width}
      focusable={focusable}
      tabIndex={focusable === 'false' ? -1 : 0}
      aria-hidden={focusable === 'false'}
      aria-disabled={focusable === 'false'} // For VoiceOver to not call out the image.
      data-locator={`${type}_icon`}
    >
      <use href={`#${type}`} />
    </svg>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default withStyles(iconStyles)(Icon);
