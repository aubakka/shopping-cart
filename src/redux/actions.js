export const ADD_ITEMS = 'ADD_ITEMS';

export const addItems = (item) => ({
  type: ADD_ITEMS,
  payload: item,
});

export const DELETE_ITEMS = 'DELETE_ITEMS';

export const deleteItems = (id) => ({
  type: DELETE_ITEMS,
  payload: id,
});
