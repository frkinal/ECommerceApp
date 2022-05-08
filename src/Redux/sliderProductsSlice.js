import { createSlice } from '@reduxjs/toolkit';
import { sliderProducts } from './services';

export const sliderProductsSlice = createSlice({
    name: 'sliderProduct',
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
        [sliderProducts.pending]: state => {
            state.loading = true;
        },
        [sliderProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.data =
                action.payload?.data !== undefined
                    ? [...state.data, ...action.payload.data]
                    : [...state.data];
            state.image =
                action.payload.image_path !== undefined
                    ? action.payload.image_path
                    : state.image;
            state.status = action.payload?.status;
        },
        [sliderProducts.rejected]: (state, action) => {
            state.loading = false;
            state.status = 'error';
        },
    },
});

export const { reset } = sliderProductsSlice.actions;
export default sliderProductsSlice.reducer;
