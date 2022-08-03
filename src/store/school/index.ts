import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getData } from "./actions";
import { ClassMembers, SchoolState } from "./types";

const initialState: SchoolState = {
  isLoading: false,
  classMembers: [],
};

const isSchoolPendingAction = (action: Action) =>
  action.type.startsWith("getData") && action.type.endsWith("pending");
const isSchoolRejectAction = (action: Action) =>
  action.type.startsWith(`getData`) && action.type.endsWith("rejected");

export const schoolSlice = createSlice({
  name: "school",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getData.fulfilled.type,
        (state: SchoolState, action: PayloadAction<Array<ClassMembers>>) => {
          state.isLoading = false;
          state.classMembers = action.payload;
        }
      )
      .addMatcher(isSchoolPendingAction, (state: SchoolState) => {
        state.isLoading = true;
      })
      .addMatcher(isSchoolRejectAction, (state: SchoolState) => {
        state.isLoading = false;
      });
  },
});

export default schoolSlice.reducer;
