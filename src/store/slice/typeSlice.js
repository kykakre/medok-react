import { createSlice } from "@reduxjs/toolkit";
import micro from "../../assets/img/microphone-voice-recording.png"
import {GetDoctors, GetDoctorsConsultationsByMainType, GetDoctorVisitType} from "../../api/api.js";
import {doctorSlice} from "./doctorSlice.js";
const initialState = {
  type: [
  ],
  CurrentVisitType:null,
  Consultations:[],
  isLoading: false,
  error: "",
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    typesFetching(state){
      state.isLoading = true;
    },
    GetDoctorVisitType(state, action) {
      state.type = action.payload;
      state.isLoading = false;

    },
    GetDoctorsConsultationsByMainType(state, action){
      state.Consultations = action.payload;
      state.isLoading = false;

    },
    SetCurrentVisitType(state, action){

      state.CurrentVisitType = action.payload;
      state.isLoading = false;

    }
  },
});

export const GetVisitTypePost = (
    pageNumber,
    specializationId,doctorId
) => {
  return async (dispatch) => {
    dispatch(typeSlice.actions.typesFetching())
    const response = await GetDoctorVisitType(pageNumber, specializationId,doctorId);
    dispatch(typeSlice.actions.GetDoctorVisitType(response));
  };
};
export const GetDoctorsConsultationsByMainTypePost = (
    pageNumber,
    specializationId, doctorId, consultationMainTypes
) => {
  return async (dispatch) => {
    dispatch(typeSlice.actions.typesFetching())
    const response = await GetDoctorsConsultationsByMainType(pageNumber, specializationId, doctorId, consultationMainTypes);
    dispatch(typeSlice.actions.GetDoctorsConsultationsByMainType(response));
  };
};



export default typeSlice.reducer;
