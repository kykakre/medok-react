import { createSlice } from "@reduxjs/toolkit";
import micro from "../../assets/img/microphone-voice-recording.png"
import {GetDoctors, GetDoctorVisitType} from "../../api/api.js";
import {doctorSlice} from "./doctorSlice.js";
const initialState = {
  type: [
    {
      id:1,
      icon:micro,
      title:"Экспресс Видео",
      subtitle:"1 вопрос - 10 минут",
      cash:100,
      valute:"руб",
    },
    {
      id:2,
      icon:micro,
      title:"Экспресс Видео",
      subtitle:"1 вопрос - 10 минут",
      cash:100,
      valute:"руб",
    },
    {
      id:3,
      icon:micro,
      title:"Экспресс Видео",
      subtitle:"1 вопрос - 10 минут",
      cash:100,
      valute:"руб",
    },
    {
      id:4,
      icon:micro,
      title:"Экспресс Видео",
      subtitle:"1 вопрос - 10 минут",
      cash:100,
      valute:"руб",
    },
    {
      id:5,
      icon:micro,
      title:"Экспресс Видео",
      subtitle:"1 вопрос - 10 минут",
      cash:100,
      valute:"руб",
    },
    {
      id:6,
      icon:micro,
      title:"Экспресс Видео",
      subtitle:"1 вопрос - 10 минут",
      cash:100,
      valute:"руб",
    },
  ],
  isLoading: false,
  error: "",
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    GetDoctorVisitType(state, action) {
      state.type = action.payload;
    },
  },
});

export const GetVisitTypePost = (
    specializationId,doctorId
) => {
  return async (dispatch) => {
    const response = await GetDoctorVisitType(specializationId,doctorId);
    dispatch(typeSlice.actions.GetDoctorVisitType(response));
  };
};


export default typeSlice.reducer;
