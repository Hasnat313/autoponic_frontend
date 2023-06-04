import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../api/BASE_URL';
import axios from 'axios';
import {login, updateStatus, getStatus} from '../../api';
const initialState = {
  status: 'idle',
  deviceStatus: '',
  //   loading: false,
  //   error: null,
};

export const fetchStatus = createAsyncThunk('device1/fetchStatus', async () => {
  try {
    const result = await getStatus();
    console.log('dsf');
    console.log(result.data);
    return result.data.result;
  } catch (error) {
    console.log(error);
    alert(error?.response?.data?.message);
    throw Error(error);
  }
});
export const changeStatus = createAsyncThunk(
  'device1/changeStatus',
  async body => {
    try {
      const result = await updateStatus(body);
      //   console.log(JSON.stringify(result.data.status));
      console.log(result.data.data.status);
      return result.data.data;
    } catch (error) {
      console.log(error);
      alert(error);
      throw Error(error);
    }
  },
);
const device1Slice = createSlice({
  name: 'device1',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchStatus.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.deviceStatus = action.payload;
      })
      .addCase(fetchStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(changeStatus.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(changeStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.deviceStatus = action.payload;
      })
      .addCase(changeStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
// export const { getDeviceState } = device1Slice.actions;
export default device1Slice.reducer;
