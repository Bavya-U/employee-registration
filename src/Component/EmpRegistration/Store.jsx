// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../EmpRegistration/Reducer/Reducer';

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;


import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../EmpRegistration/Reducer/Reducer';
import { thunk } from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;