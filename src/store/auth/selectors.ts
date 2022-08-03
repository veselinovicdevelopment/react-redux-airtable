import { RootState } from "..";

export const selectLoginStatus = (state: RootState) => state.auth.loggedIn;
export const selectStudentName = (state: RootState) => state.auth.studentName;
