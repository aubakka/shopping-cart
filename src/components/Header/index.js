import React, { useState } from 'react';

import { HeaderWrapper } from './styles';
import Button from '../Button';
import Textbox from '../Textbox';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../../redux/actions';

function Header() {
  const items = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [product, setProduct] = useState('');
  const [price, setPrice] = useState(0);

  const handleOnPriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleOnProductChange = (event) => {
    setProduct(event.target.value);
  };
  const onClick = (event) => {
    console.log({ product, price });
    const newProduct = {
      label: product,
      price,
      id: `${items.length + 1}`,
      isPacked: false,
    };

    dispatch(addItems(newProduct));
    // setItems([newProduct, ...items]);
  };

  return (
    <HeaderWrapper>
      <Textbox
        width="188px"
        placeholder="Product"
        onChange={handleOnProductChange}
      />
      <Textbox
        width="86px"
        placeholder="Price"
        onChange={handleOnPriceChange}
      />
      <Button label="Add" onClick={onClick} />
    </HeaderWrapper>
  );
}

export default Header;
