import { createSlice } from "@reduxjs/toolkit";
import travm1 from "../../assets/img/special1.png";
import travm2 from "../../assets/img/special2.png";
import {GetServices} from "../../api/api.js";
const initialState = {
  service: [
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
