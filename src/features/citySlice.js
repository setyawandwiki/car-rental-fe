import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: null,
  error: null,
};

export const city = createAsyncThunk(
  "city/get",
  async ({ val }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/city?name=${val}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
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
      .addCase(city.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(city.fulfilled, (state, action) => {
        console.log(action);
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(city.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default citySlice.reducer;
