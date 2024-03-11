import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token") || "",
  refreshToken: localStorage.getItem("refreshToken") || "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
      localStorage.setItem("refreshToken", action.payload);
    },
    clearToken: (state) => {
      state.token = "";
      state.refreshToken = "";
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { setToken, setRefreshToken, clearToken } = authSlice.actions;

export const refreshAccessToken = () => async (dispatch, getState) => {
  const { refreshToken } = getState().auth;

  try {
    const response = await axios.post("/refresh-token", {
      refreshToken: refreshToken,
    });

    const newAccessToken = response.data.accessToken;
    dispatch(setToken(newAccessToken));
  } catch (error) {
    console.error("Error refreshing access token:", error);
    dispatch(clearToken());
  }
};

export default authSlice.reducer;
