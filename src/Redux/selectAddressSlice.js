import { createSlice } from '@reduxjs/toolkit';
import { selectAddressProcess } from './services';

export const selectAddressSlice = createSlice({
    name: 'selectAddress',
    initialState: {
        loading: false
    },
    reducers: {},
    extraReducers: {
        [selectAddressProcess.pending]: (state, action) => {
            state.loading = true;
        },
        [selectAddressProcess.fulfilled]: (state, action) => {
            state.loading = false;
        },
    },
});

export default selectAddressSlice.reducer;
