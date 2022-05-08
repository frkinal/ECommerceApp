import { createSlice } from '@reduxjs/toolkit';
import { getCityProcess } from './services';

export const getCitySlice = createSlice({
    name: 'getCity',
    initialState: {
        data: undefined,
        status: undefined
    },
    extraReducers: {
        [getCityProcess.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getCityProcess.fulfilled]: (state, action) => {
            state.data =
                action.payload?.data !== undefined
                    ? action.payload?.data
                    : action.payload
            state.status = action.payload?.status;
        },
        [getCityProcess.rejected]: (state, action) => {
            state.status = action.payload?.status;
            state.error = action.error;
        },
    },
});

export default getCitySlice.reducer;
