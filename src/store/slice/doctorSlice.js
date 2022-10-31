import { createSlice } from "@reduxjs/toolkit";
import avatar from "../../assets/img/avatarDoctor.png";
import {GetDoctors, GetDoctorsSearch, GetServices} from "../../api/api.js";
import {serviceSlice} from "./serviceSlice.js";
const initialState = {
  doctor:{
    SpecializationTitle:"",
    ListOfDoctors:[
    ]
  },
  CurrentDoctor:null,
  isLoading: false,
  error: "",
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    DoctorsFetching(state) {
      state.isLoading = true;
    },
    GetDoctors(state, action) {
      state.doctor = action.payload;
      state.isLoading = false;
    },
    SetDoctor(state, action) {
      state.CurrentDoctor = action.payload;
      state.isLoading = false;
    },
  }
});

export const GetDoctorPost = (
    pageNumber,
    specializationId
) => {
  return async (dispatch) => {
    dispatch(doctorSlice.actions.DoctorsFetching())
    const response = await GetDoctors(pageNumber, specializationId);
    dispatch(doctorSlice.actions.GetDoctors(response));
  };
};

export const GetDoctorSearch = (
    namesSearchString
) => {
  return async (dispatch) => {
    dispatch(doctorSlice.actions.DoctorsFetching())
    const response = await GetDoctorsSearch(namesSearchString);
    dispatch(doctorSlice.actions.GetDoctors(response));
  };
};


export default doctorSlice.reducer;
