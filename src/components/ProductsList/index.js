import { arrayOf, bool, number, shape, string } from 'prop-types';
import React from 'react';
import Textbox from '../Textbox';
import ProductLine from './components/ProductLine';

const renderProductLine = (item) => <ProductLine key={item.id} item={item} />;

function ProductsList({ label, items }) {
  return (
    <div>
      <h3>{label}</h3>
      <Textbox width="188px" placeholder="Filter inside the items" />
      {items.map(renderProductLine)}
    </div>
  );
}

ProductsList.propTypes = {
  label: string,
  items: arrayOf(
    shape({
      id: string,
      label: string,
      price: number,
      isPacked: bool,
    }),
  ),
};

ProductsList.defaultProps = {
  label: null,
  items: null,
};

export default ProductsList;
