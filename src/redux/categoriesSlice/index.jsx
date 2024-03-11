import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    // reducers lainnya...
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
