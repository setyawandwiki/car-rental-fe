import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: null,
  error: null,
};

export const getCompanyCar = createAsyncThunk(
  "car/get",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/company-car?city=${data.value}&type=${data.type}`,
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

const companyCarSlice = createSlice({
  name: "companyCars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompanyCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCompanyCar.fulfilled, (state, action) => {
        state.data = action.payload.content;
        state.loading = false;
      })
      .addCase(getCompanyCar.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default companyCarSlice.reducer;
