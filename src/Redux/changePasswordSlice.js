import { createSlice } from '@reduxjs/toolkit';
import { changePasswordProcess } from './services';

export const changePasswordSlice = createSlice({
    name: 'password',
    initialState: {
        chanegePassword: undefined,
        status: undefined,
        loading: false,
    },
    extraReducers: {
        [changePasswordProcess.pending]: (state) => {
            state.loading = true;
        },
        [changePasswordProcess.fulfilled]: (state, action) => {
            state.loading = false;
            state.chanegePassword = action.payload?.data !== undefined
                ? action.payload?.data
                : action.payload
            state.status = action.payload?.status;
        },
    },
});

export default changePasswordSlice.reducer;
