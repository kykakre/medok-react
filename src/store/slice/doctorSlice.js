import { createSlice } from "@reduxjs/toolkit";
import avatar from "../../assets/img/avatarDoctor.png";
const initialState = {
  doctor: [
    {
      id: 1,
      avatar: avatar,
      name: "Григорий",
      surname: "Иванович",
      lastname: "Домин",
      type: "Терапевт",
      experiens: "12 лет",
      degree: "Доктор наук",
      review: 5,
      grabe: 3.5,
      category: "II",
    },
    {
      id: 2,
      avatar: avatar,
      name: "Григорий",
      surname: "Иванович",
      lastname: "Домин",
      type: "Терапевт",
      experiens: "12 лет",
      degree: "Доктор наук",
      review: 5,
      grabe: 3.5,
      category: "II",
    },
    {
      id: 3,
      avatar: avatar,
      name: "Григорий",
      surname: "Иванович",
      lastname: "Домин",
      type: "Терапевт",
      experiens: "12 лет",
      degree: "Доктор наук",
      review: 5,
      grabe: 3.5,
      category: "II",
    },
    {
      id: 4,
      avatar: avatar,
      name: "Григорий",
      surname: "Иванович",
      lastname: "Домин",
      type: "Терапевт",
      experiens: "12 лет",
      degree: "Доктор наук",
      review: 5,
      grabe: 3.5,
      category: "II",
    },
    {
      id: 5,
      avatar: avatar,
      name: "Григорий",
      surname: "Иванович",
      lastname: "Домин",
      type: "Терапевт",
      experiens: "12 лет",
      degree: "Доктор наук",
      review: 5,
      grabe: 3.5,
      category: "II",
    },
  ],
  isLoading: false,
  error: "",
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},
});

export default doctorSlice.reducer;
