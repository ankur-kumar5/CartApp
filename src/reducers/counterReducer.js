import { createSlice } from "@reduxjs/toolkit";

const iniitalState = {
    counter: 0,
    showCounter: true,
}

const counterReducer = createSlice({
    name: "counter",
    initialState: iniitalState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementByAmount(state, action) {
            state.counter = state.counter * action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterReducer.actions;

export default counterReducer.reducer;