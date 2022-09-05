import { createSlice } from "@reduxjs/toolkit";
import travm1 from "../../assets/img/special1.png";
import travm2 from "../../assets/img/special2.png";
import {GetServices} from "../../api/api.js";
const initialState = {
  service: [
    {
      id: 1,
      icon: travm1,
      title: "Травматолог",
      type: "Травмы",
    },
    {
      id: 2,
      icon: travm2,
      title: "Травматолог",
      type: "Травмы",
    },
    {
      id: 3,
      icon: travm1,
      title: "Травматолог",
      type: "Травмы",
    },
    {
      id: 4,
      icon: travm2,
      title: "Травматолог",
      type: "Травмы",
    },
    {
      id: 5,
      icon: travm1,
      title: "Травматолог",
      type: "Травмы",
    },
    {
      id: 6,
      icon: travm2,
      title: "Травматолог",
      type: "Травмы",
    },
    {
      id: 7,
      icon: travm1,
      title: "Травматолог",
      type: "Травмы",
    },
  ],
  isLoading: false,
  error: "",
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    GetServices(state, action) {
      state.service = action.payload;
    },
  },
});

export const GetServicesPost = (
    searchQuery
) => {
  return async (dispatch) => {
    const response = await GetServices(searchQuery);
    dispatch(serviceSlice.actions.GetServices(response));
  };
};


export default serviceSlice.reducer;
