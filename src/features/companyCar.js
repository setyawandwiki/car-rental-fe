import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: JSON.parse(localStorage.getItem("companyCarData")) || [],
  companyCar: {},
  loading: null,
  error: null,
};

export const getCompanyCar = createAsyncThunk(
  "car/get",
  async (data, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/company-car?city=${data.search}&type=${data.type}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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

export const getCompanyCarDetail = createAsyncThunk(
  "companyCarDetail/get",
  async (data, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/company-car/${data}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
  name: "companyCar",
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
        localStorage.setItem(
          "companyCarData",
          JSON.stringify(action.payload.content)
        );
      })
      .addCase(getCompanyCar.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getCompanyCarDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCompanyCarDetail.fulfilled, (state, action) => {
        state.companyCar = action.payload;
        state.loading = false;
        localStorage.setItem(
          "companyCarDetail",
          JSON.stringify(action.payload)
        );
      })
      .addCase(getCompanyCarDetail.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default companyCarSlice.reducer;
