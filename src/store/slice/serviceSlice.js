import { createSlice } from "@reduxjs/toolkit";
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
   ServiceFetching(state){
     state.isLoading = true;
   },
    GetServices(state, action) {
      state.service = action.payload;
      state.isLoading = false;
    },

  },
});

export const GetServicesPost = (
    searchQuery,specializationType,isPremium
) => {
  return async (dispatch) => {
    dispatch(serviceSlice.actions.ServiceFetching())
    const response = await GetServices( searchQuery,specializationType,isPremium);
    dispatch(serviceSlice.actions.GetServices(response));
  };
};


export default serviceSlice.reducer;
