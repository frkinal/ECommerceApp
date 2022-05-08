import { createSlice } from '@reduxjs/toolkit';
import { updateCartProcess } from './services';

export const updateFromCartSlice = createSlice({
    name: 'updateCart',
    initialState: {
        status: undefined,
        loading: false
    },
    reducers: {},
    extraReducers: {
        [updateCartProcess.pending]: (state, action) => {
            state.loading = true
        },
        [updateCartProcess.fulfilled]: (state, action) => {
            state.loading = false
            state.status = action.payload?.status;
        },
    },
});

export default updateFromCartSlice.reducer;
