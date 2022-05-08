import { createSlice } from '@reduxjs/toolkit';
import { getSecondTownProcess } from './services';

export const getSecondTownSlice = createSlice({
    name: 'getSecondTown',
    initialState: {
        data: undefined,
        loading: false,
        status: undefined
    },
    extraReducers: {
        [getSecondTownProcess.pending]: (state, action) => {
            state.loading = true
        },
        [getSecondTownProcess.fulfilled]: (state, action) => {
            state.loading = false
            state.data =
                action.payload?.data !== undefined
                    ? action.payload?.data
                    : action.payload
            state.status = action.payload?.status;
        },
        [getSecondTownProcess.rejected]: (state, action) => {
            state.loading = false
            state.status = action.payload?.status;
            state.error = action.error;
        },
    },
});

export default getSecondTownSlice.reducer;

