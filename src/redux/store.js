import { configureStore } from '@reduxjs/toolkit';
import device1Reducers from './slices/device1';

export const store = configureStore({
  reducer: {
    device1: device1Reducers
  }
});