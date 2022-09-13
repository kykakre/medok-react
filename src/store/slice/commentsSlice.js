import { createSlice } from "@reduxjs/toolkit";
import {CreateMessageForConsultation, GetDoctors} from "../../api/api.js";
import {doctorSlice} from "./doctorSlice.js";

const initialState = {
  comments: [
    {
      id: 1,
      date: "12.06.22г",
      person: "Иванов Иван Иванович",
      personCom: "Сидоров Сидор Сидорович",
      status: "Врач",
      comment:
        " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    },
    {
      id: 2,
      date: "12.06.22г",
      person: "Иванов Иван Иванович",
      personCom: "Сидоров Сидор Сидорович",
      status: "Врач",
      comment:
        " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    },
    {
      id: 3,
      date: "12.06.22г",
      person: "Иванов Иван Иванович",
      personCom: "Сидоров Сидор Сидорович",
      status: "Врач",
      comment:
        " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    },
    {
      id: 4,
      date: "12.06.22г",
      person: "Иванов Иван Иванович",
      personCom: "Сидоров Сидор Сидорович",
      status: "Врач",
      comment:
        " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    },
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
