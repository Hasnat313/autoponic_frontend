import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../api/BASE_URL';
import axios from 'axios';
import {login, updateStatus, getStatus, getHumidityGraph} from '../../api';
const initialState = {
  status: 'idle',
  humidity: '',
  //   loading: false,
  error: null,
};

export const fetchHumidityValues = createAsyncThunk(
  'humidity/fetchValues',
  async () => {
    try {
        console.log("inside")
      const result = await getHumidityGraph();
      console.log('dsfdfgvmgsareWJGHD');
      console.log("Result it " ,result);
      return result.data.result;
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
const humiditySlice = createSlice({
  name: 'device1',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHumidityValues.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchHumidityValues.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.humidity = action.payload;
      })
      .addCase(fetchHumidityValues.rejected, (state, action) => {
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
export default humiditySlice.reducer;
