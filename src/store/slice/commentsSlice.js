import { createSlice } from "@reduxjs/toolkit";
import {CreateMessageForConsultation, GetDoctors} from "../../api/api.js";
import {doctorSlice} from "./doctorSlice.js";

const initialState = {
  comments: [
  ],
  isLoading: false,
  error: "",
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    CreateMessageForConsultation(state, action) {
      state.comments = action.payload;
    },
  },
});

export const GetCommentsPost = (
    searchQuery
) => {
  return async (dispatch) => {
    const response = await CreateMessageForConsultation(searchQuery);
    dispatch(commentsSlice.actions.CreateMessageForConsultation(response));
  };
};

export default commentsSlice.reducer;
