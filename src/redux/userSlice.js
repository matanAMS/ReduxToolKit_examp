import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo:{
        name: "matan",
        email:"matan@gmail.com"
        },
       pending:false,
       error:false, 
    },
    reducers: {
      updateStart: (state) => {
        state.pending = true;
      },
      updateSuccess: (state, action) => {
        state.userInfo = action.payload;
        state.pending = false;
      },
      updateError: (state) => {
      state.error = true;
      state.pending = false;
      },
    },
});

export const {updateStart,updateSuccess,updateError} = userSlice.actions;
export default userSlice.reducer;