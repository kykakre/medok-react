import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: [],
  isLoading: false,
  error: "",
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
});

export default contentSlice.reducer;
