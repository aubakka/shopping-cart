import { bool, number, shape, string } from 'prop-types';

import React from 'react';

function ProductLine({ item, items, setItems }) {
  const { label, price, isPacked, id } = item;
  const handleOnDeleteClick=()=>{
    console.log(id);
    const newItems = items.filter(ele => ele.id !== id); 
    setItems(newItems);

  }
 const handleOnCheckBoxClick=() =>{
    console.log(id);
    const newItem = items.map(ele => {
     if( ele.id === id)
      { 
        return {
          ...ele,
          isPacked: !isPacked
        
        }
      }

     return ele;
      
    })
    setItems(newItem);

 }
  return (
    <div>
      <input type="checkbox" checked={isPacked}  onClick={handleOnCheckBoxClick}/>
      <span>{label}</span>
      <span>{price}</span>
      <span onClick={handleOnDeleteClick}>delete</span>
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
