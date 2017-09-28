/*
 * @flow
 */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Text from 'src/components/Text';

import styles from './styles';

const TextButton = ({ label, icon, textStyle, ...rest }) => {
  return (
    <Button {...rest}>
      {icon || null}
      <Text style={[styles.text, textStyle]}>
        {(`${label}`).toUpperCase()}
      </Text>
    </Button>
  );
};

TextButton.propTypes = {
  ...Button.propTypes,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  textStyle: PropTypes.any,
};

TextButton.defaultProps = {
  icon: null,
  textStyle: null,
};

export default TextButton;
