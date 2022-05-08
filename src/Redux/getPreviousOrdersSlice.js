import { createSlice } from '@reduxjs/toolkit';
import { getPreviousOrders } from './services';

export const getPreviousOrdersSlice = createSlice({
    name: 'previousOrders',
    initialState: {
        data: undefined,
        status: undefined,
        image: undefined,
    },
    extraReducers: {
        [getPreviousOrders.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getPreviousOrders.fulfilled]: (state, action) => {
            state.data = action.payload?.data !== undefined
                ? action.payload?.data
                : action.payload
            state.image = action.payload?.image_path !== undefined
                ? action.payload?.image_path
                : action.payload
            state.status = action.payload?.status
        },
        [getPreviousOrders.rejected]: (state, action) => {
            state.status = action.payload?.status
            state.error = action.error;
        },
    },
});

export default getPreviousOrdersSlice.reducer;
