import { createSlice } from '@reduxjs/toolkit';
import { firstCategories } from './services';

export const firstCategorySlice = createSlice({
    name: 'firstCategory',
    initialState: {
        firstCategoryData: undefined,
        image: undefined,
    },
    extraReducers: {
        [firstCategories.pending]: state => {
            state.status = 'loading';
        },
        [firstCategories.fulfilled]: (state, action) => {
            state.firstCategoryData = action.payload?.data;
            state.image = action.payload?.image_path;
            state.status = 'succeeded';
        },
        [firstCategories.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        },
    },
});
export default firstCategorySlice.reducer;
