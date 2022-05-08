import { createSlice } from '@reduxjs/toolkit';
import { addBasketProcess } from './services';

export const addBasketSlice = createSlice({
    name: 'addBasket',
    initialState: {
        data: undefined,
        loading: false
    },
    extraReducers: {
        [addBasketProcess.pending]: (state) => {
            state.loading = true
        },
        [addBasketProcess.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload?.data
            state.status = action.payload?.status
        },
    },
});

export default addBasketSlice.reducer;
