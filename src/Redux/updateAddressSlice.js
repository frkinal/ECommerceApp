
import { createSlice } from '@reduxjs/toolkit';
import { updateAddressProcess } from './services';

export const updateAddressSlice = createSlice({
    name: 'updateAddress',
    initialState: {
        data: undefined,
        loading: false,
        status: undefined,
    },
    extraReducers: {
        [updateAddressProcess.pending]: state => {
            state.loading = true
        },
        [updateAddressProcess.fulfilled]: (state, action) => {
            state.loading = false
            state.status = action.payload?.status
        },
        [updateAddressProcess.rejected]: (state) => {
            state.loading = false
        },
    },
});

export default updateAddressSlice.reducer;

