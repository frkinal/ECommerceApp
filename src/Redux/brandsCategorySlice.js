import { createSlice } from '@reduxjs/toolkit';
import { brandsCategory } from './services';

export const brandsCategorySlice = createSlice({
    name: 'brand',
    initialState: {
        data: undefined,
        loading: false,
        image: undefined,
    },
    extraReducers: {
        [brandsCategory.pending]: state => {
            state.loading = true;
        },
        [brandsCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.data =
                action.payload?.data !== undefined
                    ? action.payload?.data
                    : action.payload
            state.image = action.payload?.image_path;
        },
        [brandsCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    },
});
export default brandsCategorySlice.reducer;
