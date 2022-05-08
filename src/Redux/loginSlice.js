import { createSlice } from '@reduxjs/toolkit';
import { loginProcess, logoutProcess } from './services';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: undefined,
        auth: false,
        loading: false,
        status: '',
    },
    extraReducers: {
        [loginProcess.pending]: state => {
            state.loading = true;
        },
        [loginProcess.fulfilled]: (state, action) => {
            state.loading = false;
            if (action.payload?.status === 'success') {
                state.auth = true;
                state.login = action.payload.data;
            } else {
                state.login = action.payload;
                state.auth = false;
            }
            state.status = action.payload?.status;
            state.login = action.payload?.data;
        },
        [logoutProcess.fulfilled]: (state) => {
            state.login = undefined;
            state.auth = false;
        },
        [loginProcess.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    },
});

export default loginSlice.reducer;
