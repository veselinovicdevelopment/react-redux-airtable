import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import schoolReducer from "./school";

const store = configureStore({
  reducer: {
    auth: authReducer,
    school: schoolReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
