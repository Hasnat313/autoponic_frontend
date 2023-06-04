import {configureStore} from '@reduxjs/toolkit';
import device1 from './slices/device1';
import device2 from './slices/device2';
import temp from './slices/temp';
export const store = configureStore({
  reducer: {
    device2,
    device1,
    temp,
  },
});
