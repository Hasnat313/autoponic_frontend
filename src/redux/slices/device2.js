import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../api/BASE_URL';
import axios from 'axios';
import {login, updateStatus2, getStatus2} from '../../api';
const initialState = {
  status: 'idle',
  deviceStatus: '',
  //   loading: false,
  //   error: null,
};

export const fetchStatus2 = createAsyncThunk(
  'device2/fetchStatus',
  async () => {
    try {
      const result = await getStatus2();
      console.log('dsf');
      console.log(result.data);
      return result.data.result.status;
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message);
      throw Error(error);
    }
  },
);
export const changeStatus2 = createAsyncThunk(
  'device2/changeStatus',
  async body => {
    try {
      const result = await updateStatus2(body);
      //   console.log(JSON.stringify(result.data.status));
      console.log(result.data.data.status);
      return result.data.data.status;
    } catch (error) {
      console.log(error);
      alert(error);
      throw Error(error);
    }
  },
);
const device2Slice = createSlice({
  name: 'device2',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchStatus2.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchStatus2.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.deviceStatus = action.payload;
      })
      .addCase(fetchStatus2.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(changeStatus2.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(changeStatus2.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.deviceStatus = action.payload;
      })
      .addCase(changeStatus2.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
// export const { getDeviceState } = device1Slice.actions;
export default device2Slice.reducer;
