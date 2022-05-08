import { createSlice } from '@reduxjs/toolkit';
import { getAddressProcess } from './services';

export const getAddressSlice = createSlice({
    name: 'getAddress',
    initialState: {
        data: undefined,
        email: undefined,
        loading: false,
    },
    extraReducers: {
        [getAddressProcess.pending]: state => {
            state.loading = true;
        },
        [getAddressProcess.fulfilled]: (state, action) => {
            state.loading = false;
            state.data =
                action.payload?.data !== undefined
                    ? action.payload?.data
                    : action.payload
            state.email =
                action.payload?.data !== undefined
                    ? action.payload?.data.email
                    : 'Kayitli Adres Yok'
        },
        [getAddressProcess.rejected]: (state, action) => {
            state.error = action.error;
        },
    },
});

export default getAddressSlice.reducer;
