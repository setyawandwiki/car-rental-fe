import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: null,
  error: null,
};

export const getCity = createAsyncThunk(
  "city/get",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/city?name=${data.value}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCity.fulfilled, (state, action) => {
        state.data = action.payload.content;
        state.loading = false;
      })
      .addCase(getCity.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default citySlice.reducer;
