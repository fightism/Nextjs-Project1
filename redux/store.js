import { configureStore } from '@reduxjs/toolkit';
import crudReducer from './crudReducer';

export const store = configureStore({
  reducer: {
adventure : crudReducer
  }
});
