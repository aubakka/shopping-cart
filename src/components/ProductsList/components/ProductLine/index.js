import { bool, number, shape, string } from 'prop-types';

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItems } from '../../../../redux/actions';

function ProductLine({ item }) {
  const { label, price, isPacked, id } = item;
  const dispatch = useDispatch();

  const handleOnClick = () => {
    console.log(id);
    dispatch(deleteItems(id));
  };

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
