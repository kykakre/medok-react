import { createSlice } from "@reduxjs/toolkit";
import micro from "../../assets/img/microphone-voice-recording.png"
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
  reducers: {},
});

export default typeSlice.reducer;
