import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    // action => action handler
    setUser: (user, action) => {
      user = action.user;
    },
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;
