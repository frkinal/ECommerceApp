import { createSlice } from '@reduxjs/toolkit';
import { productDetails } from './services';

export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
        productDetailData: undefined,
        images: undefined,
    },
    extraReducers: {
        [productDetails.pending]: state => {
            state.status = 'loading';
        },
        [productDetails.fulfilled]: (state, action) => {
            state.productDetailData = action.payload?.data;
            state.images = action.payload?.images;
            state.status = 'succeeded';
        },
        [productDetails.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        },
    },
});
export default productDetailSlice.reducer;
