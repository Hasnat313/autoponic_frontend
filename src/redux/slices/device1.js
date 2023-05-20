import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from "../../api/BASE_URL";

const initialState={
  status: "idle",
  deviceStatus:"",
  loading:false,
  error:null,
};


export const getStatus = async (link) => {
	const response = await axios.get(BASE_URL + link);
	return response.data;
};

export const fetchStatus = createAsyncThunk("device1/fetchStatus", async (link) => {
	try {
		const status = await getStatus(link);
		return status;  
	} catch (error) {
		console.log(error);
		alert(error?.response?.data?.message);
		throw Error(error);
	}
});
const device1Slice = createSlice({
  name: "device1",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
		builder
			.addCase(fetchStatus.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchStatus.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.deviceStatus = action.payload;
			})
			.addCase(fetchStatus.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
})
// export const { getDeviceState } = device1Slice.actions;
export default device1Slice.reducer;