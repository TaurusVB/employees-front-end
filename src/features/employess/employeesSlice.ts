import { createSlice } from "@reduxjs/toolkit";
import { Employee, employessApi } from "../../app/services/employess";

interface InitialState {
  employees: Employee[] | null;
}

const initialState: InitialState = {
  employees: null,
};

const slice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      employessApi.endpoints.getAllEmployees.matchFulfilled,
      (state, action) => {
        state.employees = action.payload;
      }
    );
  },
});

export default slice.reducer;
