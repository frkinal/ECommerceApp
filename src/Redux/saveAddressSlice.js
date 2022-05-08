import { createSlice } from '@reduxjs/toolkit';
import { saveAddressProcess } from './services';

export const saveAddressSlice = createSlice({
    name: 'saveAddress',
    initialState: {
        data: undefined,
        loading: false,
        status: ''
    },
    extraReducers: {
        [saveAddressProcess.pending]: state => {
            state.loading = true
        },
        [saveAddressProcess.fulfilled]: (state, action) => {
            state.data =
                action.payload?.data !== undefined
                    ? action.payload?.data
                    : action.payload
            state.status = action.payload?.status
            state.loading = false
        },
        [saveAddressProcess.rejected]: (state) => {
            state.loading = false
        },
    },
});

export default saveAddressSlice.reducer;
