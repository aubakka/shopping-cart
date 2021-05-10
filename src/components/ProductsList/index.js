import { arrayOf, bool, number, shape, string } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import Textbox from '../Textbox';
import ProductLine from './components/ProductLine';

const renderProductLine = (item) => <ProductLine key={item.id} item={item} />;

function ProductsList({ label }) {
  const items = useSelector((state) => state.products);

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
};

ProductsList.defaultProps = {
  label: null,
};

export default ProductsList;
