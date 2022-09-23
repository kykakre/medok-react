import { createSlice } from "@reduxjs/toolkit";
import {GetSpecializationTypes} from "../../api/api.js";
const initialState = {
    specialization: [
    ],
    isLoading: false,
    error: "",
};

export const specializationSlice = createSlice({
    name: "specialization",
    initialState,
    reducers: {
        GetSpecialization(state, action) {
            state.specialization = action.payload;
        },
    },
});

export const GetSpecializationPost = (
) => {
    return async (dispatch) => {

        const response = await GetSpecializationTypes();
        dispatch(specializationSlice.actions.GetSpecialization(response));
    };
};


export default specializationSlice.reducer;
