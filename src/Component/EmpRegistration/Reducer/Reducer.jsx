import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, GET_ITEM, UPDATE_ITEM } from '../Type/Type';

const initialState = {
  items: [],
  item: {}
};

const itemReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case GET_ITEM:
      return {
        ...state,
        item: action.payload
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case UPDATE_ITEM:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default itemReducer;
