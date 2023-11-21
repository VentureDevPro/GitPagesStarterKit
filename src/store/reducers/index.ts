import { combineReducers } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { createReducer } from "@reduxjs/toolkit";

export interface Session {
    buttonClickCount: number
    testURLData: object
}

const initialState: Session = {
    buttonClickCount: 0,
    testURLData: {},
}

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        changeCounterNumber: (state, action: PayloadAction<string>) => {
            state.buttonClickCount = action.payload === 'increment' ? state.buttonClickCount + 1 : state.buttonClickCount - 1
        }
    }
})

export const sessionActions = sessionSlice.actions
export const sessionReducer = sessionSlice.reducer
export const reducers = combineReducers({
    session: sessionReducer,
    // AsyncSelector: createReducer(),
})
export type IState = ReturnType<typeof reducers>