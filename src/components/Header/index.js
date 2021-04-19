import React from 'react';
import Button from '../Button';
import Textbox from '../Textbox';
import { HeaderWrapper } from './styles';

function Header() {
  return (
    <HeaderWrapper>
      <Textbox width="188px" placeholder="Product" />
      <Textbox width="86px" placeholder="Price" />
      <Button label="Add" />
    </HeaderWrapper>
  );
}

export default Header;
