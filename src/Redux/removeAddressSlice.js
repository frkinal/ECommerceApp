
import { createSlice } from '@reduxjs/toolkit';
import { removeAddressProcess } from './services';

export const removeAddressSlice = createSlice({
    name: 'removeAddress',
    initialState: {
        loading: false
    },
    reducers: {},
    extraReducers: {
        [removeAddressProcess.pending]: (state, action) => {
            state.loading = true;
        },
        [removeAddressProcess.fulfilled]: (state, action) => {
            state.loading = false;
        },
    },
});

export default removeAddressSlice.reducer;

