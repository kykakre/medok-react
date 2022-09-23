import { createSlice } from "@reduxjs/toolkit";
import {CreateMessageForConsultation, GetDoctors} from "../../api/api.js";
import {doctorSlice} from "./doctorSlice.js";

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

export const SendMessagePost = (
    request,
) => {
  return async () => {
    const response = await CreateMessageForConsultation(request);
  };
};

export default contentSlice.reducer;
