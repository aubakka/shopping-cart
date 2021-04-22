import { func, string } from 'prop-types';
import React from 'react';
import { StyledTextInput } from './styles';

function Textbox({ placeholder, width, onChange}) {
  return (
    <StyledTextInput width={width} placeholder={placeholder} type="text" onChange={onChange} />
  );
}

Textbox.propTypes = {
  placeholder: string,
  width: string,
  onChange: func
};

Textbox.defaultProps = {
  placeholder: null,
  width: '100%',
  onChange: Function.prototype
};

export default Textbox;
