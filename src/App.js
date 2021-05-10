import { set } from 'ramda';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from './components/Button';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <ProductsList label="Unpacked items" />

      <ProductsList label="Packed items" />

      <Button label="Mark all as unpacked" />
      <p>Total : 200$</p>
    </div>
  );
}

export default App;
