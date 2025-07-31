import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: JSON.parse(localStorage.getItem("userOrder")) || [],
  loading: null,
  error: null,
};

export const getUserOrder = createAsyncThunk(
  "orderUser/get",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/orders`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserOrder.fulfilled, (state, action) => {
        state.data = action.payload.content;
        state.loading = false;
        localStorage.setItem(
          "userOrder",
          JSON.stringify(action.payload.content)
        );
      })
      .addCase(getUserOrder.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default orderSlice.reducer;
