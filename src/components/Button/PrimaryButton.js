import React from 'react';
import TextButton from './TextButton';

const PrimaryButton = (props) => (
  <TextButton
    color="#4285F4"
    disabledColor="#999"
    {...props}
  />
);

export default PrimaryButton;
