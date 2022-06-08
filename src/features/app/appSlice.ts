import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ColourSwitchState {
    enabled: boolean
}

const initialState: ColourSwitchState = {
    enabled: true
}

export const colourSwitchSlice = createSlice({
    name: "colourSwitch",
    initialState,
    reducers: {
        toggle: (state) => {
            state.enabled = !state.enabled
        }
    }
});

export const { toggle } = colourSwitchSlice.actions;
export default colourSwitchSlice.reducer;