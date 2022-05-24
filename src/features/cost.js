import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 30;

const costSlice = createSlice({
  name: "cost",
  initialState: { value: initialStateValue },
  reducers: {
    addOrder: (state, action) => {
      state.value += action.payload;
    },
    removeOrder: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { addOrder, removeOrder } = costSlice.actions;

export default costSlice.reducer;
