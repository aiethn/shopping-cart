import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

const shippingSlice = createSlice({
  name: "shipping",
  initialState: { value: initialStateValue },
  reducers: {
    addCode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addCode } = shippingSlice.actions;

export default shippingSlice.reducer;
