import { bool, number, shape, string } from 'prop-types';
import { o } from 'ramda';
import React from 'react';

function ProductLine({ item }) {
  const { label, price, isPacked } = item;

  return (
    <div>
      <input type="checkbox" checked={isPacked} />
      <span>{label}</span>
      <span>{price}</span>
      <span>delete</span>
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
