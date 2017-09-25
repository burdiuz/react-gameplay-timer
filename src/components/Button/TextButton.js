/*
 * @flow
 */
import React from 'react';
import Button from './Button';
import Text from 'src/components/Text';

import styles from './styles';

const TextButton = (props) => {
  const { label, icon, textStyle, ...rest } = props;
  return (
    <Button {...rest}>
      {icon || null}
      <Text style={[styles.text, textStyle]}>
        {(`${label}`).toUpperCase()}
      </Text>
    </Button>
  );
};

export default TextButton;
