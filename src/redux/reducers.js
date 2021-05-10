import { ADD_ITEMS, DELETE_ITEMS } from './actions';

const initialState = {
  products: [
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
  ],
};

export default function productsReducer(state = initialState, action) {
  console.log({ action, state });
  switch (action.type) {
    case ADD_ITEMS:
      return { ...state, products: [action.payload, ...state.products] };
    case DELETE_ITEMS:
      return {
        ...state,
        products: [...state.products.filter((el) => el.id !== action.payload)],
      };
    default:
      return state;
  }
}
