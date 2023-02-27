import { configureStore } from '@reduxjs/toolkit';
import fruitsReducer from './fruitsSlice';
import vagetablesReducer from './vagetablesSlice';

const store = configureStore({
  reducer: {
    fruits: fruitsReducer,
    vagetables: vagetablesReducer,
  },
});

export default store;
