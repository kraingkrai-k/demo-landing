import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handlerAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    handlerSignout: (state) => {
      // clear
      state.isAuth = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handlerAuth, handlerSignout } = authSlice.actions;

export default authSlice.reducer;
