import { createSlice } from "@reduxjs/toolkit";
import avatar from "../../assets/img/avatarDoctor.png";
import {GetDoctors, GetServices} from "../../api/api.js";
import {serviceSlice} from "./serviceSlice.js";
const initialState = {
  doctor:{
    SpecializationTitle:"",
    ListOfDoctors:[
      {
        Id: 1,
        AvatarImagePath: avatar,
        Name: "Григорий",
        PatronymicName: "Иванович",
        Surname: "Домин",

      },
    ]
  },







  isLoading: false,
  error: "",
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    GetDoctors(state, action) {
      state.doctor = action.payload;
    },
  }
});

export const GetDoctorPost = (
    specializationId
) => {
  return async (dispatch) => {
    const response = await GetDoctors(specializationId);
    dispatch(doctorSlice.actions.GetDoctors(response));
  };
};


export default doctorSlice.reducer;
