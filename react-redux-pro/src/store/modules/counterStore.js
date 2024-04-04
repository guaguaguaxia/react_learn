import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    addToNumber(state, action) {
      state.count = action.payload;
    },
  },
});

const { increment, decrement, addToNumber} = counterStore.actions;

const reducer = counterStore.reducer;

export { increment, decrement, addToNumber };
export default reducer;
