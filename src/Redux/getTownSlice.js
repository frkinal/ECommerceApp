import { createSlice } from '@reduxjs/toolkit';
import { getTownProcess } from './services';

export const getTownSlice = createSlice({
    name: 'getTown',
    initialState: {
        data: undefined,
        loading: false,
        status: undefined
    },
    extraReducers: {
        [getTownProcess.pending]: (state, action) => {
            state.loading = true
        },
        [getTownProcess.fulfilled]: (state, action) => {
            state.loading = false
            state.data =
                action.payload?.data !== undefined
                    ? action.payload?.data
                    : action.payload
            state.status = action.payload?.status;
        },
        [getTownProcess.rejected]: (state, action) => {
            state.loading = false
            state.status = action.payload?.status;
            state.error = action.error;
        },
    },
});

export default getTownSlice.reducer;

