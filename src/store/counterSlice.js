import { createSlice } from "@reduxjs/toolkit";  
const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0, isShowCounter: true},
    reducers: {
        increment(state){ state.counter++ },
        decrement(state){ state.counter-- },
        increase(state, action){state.counter = state.counter + action.payload},
        toggle(state){state.isShowCounter = !state.isShowCounter}
    }
});
export const counterActions = counterSlice.actions
export default counterSlice