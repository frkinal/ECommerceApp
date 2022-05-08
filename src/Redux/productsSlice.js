import { createSlice } from '@reduxjs/toolkit';
import { allProducts } from './services';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        image: undefined,
        loading: false,
        status: '',
    },
    reducers: {
        reset: state => {
            state.data = [];
            state.image = undefined;
            state.loading= false;
            state.status = '';
        },
    },
    extraReducers: {
        [allProducts.pending]: state => {
            state.loading= true;
        },
        [allProducts.fulfilled]: (state, action) => {
            state.loading= false;
            state.data =
                action.payload?.data !== undefined
                    ? [...state.data, ...action.payload.data]
                    : [...state.data];
            state.image =
                action.payload.image_path !== undefined
                    ? action.payload.image_path
                    : state.image;
        },
        [allProducts.rejected]: (state, action) => {
            state.loading= false;
            state.error = action.error;
        },
    },
});

export const { reset } = productsSlice.actions;
export default productsSlice.reducer;
