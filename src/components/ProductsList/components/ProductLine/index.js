import { bool, number, shape, string } from 'prop-types';

import React from 'react';

function ProductLine({ item }) {
  const { label, price, isPacked, id } = item;
  const handleOnClick=()=>{
    console.log(id);
//const newItems=items.filter(element=> element.id !== id)
  }

  return (
    <div>
      <input type="checkbox" checked={isPacked} />
      <span>{label}</span>
      <span>{price}</span>
      <span onClick={handleOnClick}>delete</span>
    </div>
  );
}

ProductLine.propTypes = {
  item: shape({
    id: string,
    label: string,
    price: number,
    isPacked: bool,
  }),
};

ProductLine.defaultProps = {
  item: null,
};

export default ProductLine;
