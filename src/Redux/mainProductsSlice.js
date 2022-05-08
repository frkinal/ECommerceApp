import { createSlice } from '@reduxjs/toolkit';
import { getMainProducts } from './services';

export const mainProductsSlice = createSlice({
    name: 'mainProducts',
    initialState: {
        data: undefined,
        loading: false,
        image: undefined,
    },
    extraReducers: {
        [getMainProducts.pending]: state => {
            state.loading = true;
        },
        [getMainProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.data =
                action.payload?.data !== undefined
                    ? action.payload?.data
                    : action.payload
            state.image = action.payload?.image_path;
        },
        [getMainProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    },
});
export default mainProductsSlice.reducer;
