import { createSlice } from '@reduxjs/toolkit';
import { registerProcess } from './services';

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        registerData: undefined,
        auth: false,
        status: '',
    },
    extraReducers: {
        [registerProcess.pending]: state => {
            state.status = 'loading';
        },
        [registerProcess.fulfilled]: (state, action) => {
            state.registerData = action.payload
            state.status = 'succeeded';
        },
        [registerProcess.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        },
    },
});

export default registerSlice.reducer;
