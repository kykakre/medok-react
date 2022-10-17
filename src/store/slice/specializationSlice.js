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
        specializationFetching(state){
            state.isLoading = true;
        },
        GetSpecialization(state, action) {

            state.specialization = action.payload;
            state.isLoading = false;

        },
    },
});

export const GetSpecializationPost = (
) => {
    return async (dispatch) => {
dispatch(specializationSlice.actions.specializationFetching());
        const response = await GetSpecializationTypes();
        dispatch(specializationSlice.actions.GetSpecialization(response));
    };
};


export default specializationSlice.reducer;
