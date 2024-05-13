// import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../Type/Type';
// import { getItemsService, addItemService, deleteItemService } from '../../Services/Api';

// export const getItems = () => dispatch => {
//   return getItemsService()
//     .then(data => dispatch({
//       type: GET_ITEMS,
//       payload: data
//     }))
//     .catch(error => console.log('Error:', error));
// };

// export const addItem = (name) => dispatch => {
//   return addItemService(name)
//     .then(data => dispatch({
//       type: ADD_ITEM,
//       payload: data
//     }))
//     .catch(error => console.log('Error:', error));
// };

// export const deleteItem = (id) => dispatch => {
//   return deleteItemService(id)
//     .then(id => dispatch({
//       type: DELETE_ITEM,
//       payload: id
//     }))
//     .catch(error => console.log('Error:', error));
// };

// Action.js
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, GET_ITEM, UPDATE_ITEM } from '../Type/Type';
import { getItemsService, getItemByIdService, addItemService, deleteItemService, updateItemService } from '../../Services/Api';

export const getItems = () => dispatch => {
  return getItemsService()
    .then(data => dispatch({
      type: GET_ITEMS,
      payload: data
    }))
    .catch(error => console.log('Error:', error));
};

export const getItemById = (id) => dispatch => {
  return getItemByIdService(id)
    .then(data => dispatch({
      type: GET_ITEM,
      payload: data
    }))
    .catch(error => console.log('Error:', error));
};

export const addItem = (name) => dispatch => {
  return addItemService(name)
    .then(data => dispatch({
      type: ADD_ITEM,
      payload: data
    }))
    .catch(error => console.log('Error:', error));
};

export const updateItem = (id, updatedData) => dispatch => {
  return updateItemService(id, updatedData)
    .then(data => dispatch({
      type: UPDATE_ITEM,
      payload: data
    }))
    .catch(error => console.log('Error:', error));
};

export const deleteItem = (id) => dispatch => {
  return deleteItemService(id)
    .then(id => dispatch({
      type: DELETE_ITEM,
      payload: id
    }))
    .catch(error => console.log('Error:', error));
};
