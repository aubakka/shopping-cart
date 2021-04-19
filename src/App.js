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
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <ProductsList items={initialItems} label="Unpacked items" />

      <ProductsList items={initialItems} label="Packed items" />

      <Button label="Mark all as unpacked" />
      <p>Total : 200$</p>
    </div>
  );
}

export default App;
