import { string } from 'prop-types';
import React from 'react';
import { StyledButton } from './styles';

function Button({ label, width }) {
  return <StyledButton width={width}>{label}</StyledButton>;
}

Button.propTypes = {
  label: string,
  width: string,
};

Button.defaultProps = {
  label: null,
  width: '100%',
};

export default Button;
