import { createSlice } from '@reduxjs/toolkit';
import { searchProductProcess } from './services';

export const searchProductsSlice = createSlice({
    name: 'search',
    initialState: {
        data: [],
        loading: false,
        status: undefined,
        image: undefined,
        message: undefined,
    },
    reducers: {
        reset: state => {
            state.data = [];
            state.image = undefined;
            state.loading= false;
            state.status = undefined;
            state.message = undefined;
        },
    },
    extraReducers: {
        [searchProductProcess.pending]: state => {
            state.loading = true;
        },
        [searchProductProcess.fulfilled]: (state, action) => {
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
            state.message = action.payload?.message;
        },
        [searchProductProcess.rejected]: (state, action) => {
            state.error = action.error.message;
        },
    },
});

export const { reset } = searchProductsSlice.actions;
export default searchProductsSlice.reducer;
