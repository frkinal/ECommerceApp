import { createSlice } from '@reduxjs/toolkit';
import { getBasketProcess } from './services';

export const getBasketSlice = createSlice({
    name: 'getBasket',
    initialState: {
        data: undefined,
        total: undefined,
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [getBasketProcess.pending]: (state) => {
            state.loading = true
        },
        [getBasketProcess.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload?.data !== undefined
                ? action.payload?.data
                : action.payload
            state.total = action.payload?.total
        },
        [getBasketProcess.rejected]: (state, action) => {
            state.error = action.error;
        },
    },
});

export default getBasketSlice.reducer;
