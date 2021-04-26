import { arrayOf, bool, number, shape, string } from 'prop-types';
import React from 'react';
import Textbox from '../Textbox';
import ProductLine from './components/ProductLine';

const renderProductLine =(setItems, items) => (item) => <ProductLine key={item.id} item={item} setItems={setItems} items={items} />;


function ProductsList({ label, items, setItems, isPacked }) {
  return (
    <div>
      <h3>{label}</h3>
      <Textbox width="188px" placeholder="Filter inside the items" />

      {items.filter(ele => ele.isPacked === isPacked ).map(renderProductLine(setItems, items))}
    </div>
  );
}

ProductsList.propTypes = {
  label: string,
  isPacked: bool,
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
  isPacked : false
};

export default ProductsList;
