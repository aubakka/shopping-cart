import { string } from 'prop-types';
import React from 'react';
import { StyledTextInput } from './styles';

function Textbox({ placeholder, width }) {
  return (
    <StyledTextInput width={width} placeholder={placeholder} type="text" />
  );
}

Textbox.propTypes = {
  placeholder: string,
  width: string,
};

Textbox.defaultProps = {
  placeholder: null,
  width: '100%',
};

export default Textbox;
