import { createSlice } from '@reduxjs/toolkit';
import { brandProducts } from './services';

export const brandProductsSlice = createSlice({
    name: 'brandProduct',
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
            state.message = undefined;
            state.loading = false;
            state.status = '';
        },
    },
    extraReducers: {
        [brandProducts.pending]: state => {
            state.loading = true;
        },
        [brandProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.data =
                action.payload?.data !== undefined
                    ? [...state.data, ...action.payload.data]
                    : [...state.data];
            state.image =
                action.payload.image_path !== undefined
                    ? action.payload.image_path
                    : state.image;
            state.message = action.payload?.message
        },
        [brandProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    },
});

export const { reset } = brandProductsSlice.actions;
export default brandProductsSlice.reducer;
