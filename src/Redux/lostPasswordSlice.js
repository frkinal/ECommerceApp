import { createSlice } from '@reduxjs/toolkit';
import { lostPasswordProcess } from './services';

export const lostPasswordSlice = createSlice({
    name: 'lostPassword',
    initialState: {
        lostPassword: undefined,
    },
    extraReducers: {
        [lostPasswordProcess.pending]: state => {
            state.status = 'loading';
        },
        [lostPasswordProcess.fulfilled]: (state, action) => {
            state.lostPassword = action.payload
            state.status = 'succeeded';
        },
        [lostPasswordProcess.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        },
    },
});

export default lostPasswordSlice.reducer;
