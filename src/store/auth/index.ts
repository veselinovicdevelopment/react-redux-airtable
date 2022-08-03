import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../../types";
import { AuthState } from "./types";

const initialState: AuthState = {
  loggedIn: false,
  studentName: null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<ILogin>) => ({
      studentName: action.payload.name,
      loggedIn: true,
    }),
    setLogout: (state) => ({
      studentName: null,
      loggedIn: false,
    }),
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
