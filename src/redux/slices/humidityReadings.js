import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../api/BASE_URL';
import axios from 'axios';
import {login, updateStatus, getStatus, getHumidityReadings} from '../../api';
const initialState = {
  status: 'idle',
  humidityReadings: '',
  //   loading: false,
  error: null,
};

export const fetchHumidityReadings = createAsyncThunk(
  'humidityReadings/fetchValues',
  async () => {
    try {
        console.log("inside")
      const result = await getHumidityReadings();
      console.log('dsfdfgvmgsareWJGHD');
      return result.data.humid2;
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message);
      throw Error(error);
    }
  },
);
// export const changeStatus = createAsyncThunk(
//   'device1/changeStatus',
//   async body => {
//     try {
//       const result = await updateStatus(body);
//       //   console.log(JSON.stringify(result.data.status));
//       console.log(result.data.data.status);
//       return result.data.data.status;
//     } catch (error) {
//       console.log(error);
//       alert(error);
//       throw Error(error);import temp from './slices/temp';

//     }
//   },
// );
const humidityReadingSlice = createSlice({
  name: 'device1',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHumidityReadings.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchHumidityReadings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.humidityReadings = action.payload;
      })
      .addCase(fetchHumidityReadings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    //   .addCase(changeStatus.pending, (state, action) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(changeStatus.fulfilled, (state, action) => {
    //     state.status = 'succeeded';
    //     state.deviceStatus = action.payload;
    //   })
    //   .addCase(changeStatus.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.error.message;
    //   });
  },
});
// export const { getDeviceState } = device1Slice.actions;
export default humidityReadingSlice.reducer;
