import { func, string } from 'prop-types';
import React from 'react';
import { StyledButton } from './styles';

function Button({ label, width, onClick }) {
  return <StyledButton width={width} onClick={onClick}>{label}</StyledButton>;
}

Button.propTypes = {
  label: string,
  width: string,
  onClick: func
};

Button.defaultProps = {
  label: null,
  width: '100%',
  onClick: Function.prototype
};

export default Button;
