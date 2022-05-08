import { createSlice } from '@reduxjs/toolkit';
import { sliderCategory } from './services';

export const sliderCategorySlice = createSlice({
    name: 'slider',
    initialState: {
        data: undefined,
        loading: false,
        image: undefined,
    },
    extraReducers: {
        [sliderCategory.pending]: state => {
            state.loading = true;
        },
        [sliderCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.data =
                action.payload?.data !== undefined
                    ? action.payload?.data
                    : action.payload
            state.image = action.payload?.image_path;
        },
        [sliderCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    },
});
export default sliderCategorySlice.reducer;
