import {configureStore} from '@reduxjs/toolkit';
import device1 from './slices/device1';
import device2 from './slices/device2';
import temp from './slices/temp';
import temperatureReadings from './slices/tempReadings';
import humidity from './slices/humidity';
import humidityReadings from './slices/humidityReadings';
import moisture from './slices/moisture';
import moistureReadings from './slices/moistureReadings';





export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  }),
  reducer: {
    device2,
    device1,
    temp,
    temperatureReadings,
    humidity,
    humidityReadings,
    moisture,
    moistureReadings
  },
});
