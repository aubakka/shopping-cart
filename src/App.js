import { set } from 'ramda';
import { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import GlobalStyle from './globalStyles';

const initialItems = [
  {
    id: '1',
    label: 'Product 1',
    price: 10,
    isPacked: true,
  },
  {
    id: '2',
    label: 'Product 2',
    price: 10,
    isPacked: true,
  },
  {
    id: '3',
    label: 'Product 3',
    price: 10,
    isPacked: true,
  },
];


function App() {
  const [items, setItems] = useState(initialItems);
  
  return (
    <div className="App">
      <GlobalStyle />
      <Header items={items} setItems={setItems} />

      <ProductsList items={items} label="Unpacked items" />

      <ProductsList items={items} label="Packed items" />

      <Button label="Mark all as unpacked" />
      <p>Total : 200$</p>
    </div>
  );
}

export default App;
