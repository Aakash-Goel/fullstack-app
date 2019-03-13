import {
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  grayColor,
} from '../../../styles/theme/muiKit';

const progressStyles = {
  root: {
    marginBottom: '20px',
  },
  bar: {},
  primary: {
    backgroundColor: primaryColor,
  },
  warning: {
    backgroundColor: warningColor,
  },
  danger: {
    backgroundColor: dangerColor,
  },
  success: {
    backgroundColor: successColor,
  },
  info: {
    backgroundColor: infoColor,
  },
  rose: {
    backgroundColor: roseColor,
  },
  gray: {
    backgroundColor: grayColor,
  },
  primaryBackground: {
    background: 'rgba(156, 39, 176, 0.2)',
  },
  warningBackground: {
    background: 'rgba(255, 152, 0, 0.2)',
  },
  dangerBackground: {
    background: 'rgba(244, 67, 54, 0.2)',
  },
  successBackground: {
    background: 'rgba(76, 175, 80, 0.2)',
  },
  infoBackground: {
    background: 'rgba(0, 188, 212, 0.2)',
  },
  roseBackground: {
    background: 'rgba(233, 30, 99, 0.2)',
  },
  grayBackground: {
    background: 'rgba(221, 221, 221, 0.2)',
  },
  primaryBufferBackground: {
    background: 'rgba(156, 39, 176, 0.5)',
  },
  warningBufferBackground: {
    background: 'rgba(255, 152, 0, 0.5)',
  },
  dangerBufferBackground: {
    background: 'rgba(244, 67, 54, 0.5)',
  },
  successBufferBackground: {
    background: 'rgba(76, 175, 80, 0.5)',
  },
  infoBufferBackground: {
    background: 'rgba(0, 188, 212, 0.5)',
  },
  roseBufferBackground: {
    background: 'rgba(233, 30, 99, 0.5)',
  },
  grayBufferBackground: {
    background: 'rgba(221, 221, 221, 0.5)',
  },
};

export default progressStyles;
