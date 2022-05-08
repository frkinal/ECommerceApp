import { createSlice } from '@reduxjs/toolkit';
import { secondCategories } from './services';

export const secondCategorySlice = createSlice({
    name: 'secCategory',
    initialState: {
        secCategoryData: undefined,
        image: undefined,
    },
    extraReducers: {
        [secondCategories.pending]: state => {
            state.status = 'loading';
        },
        [secondCategories.fulfilled]: (state, action) => {
            state.secCategoryData = action.payload?.data;
            state.image = action.payload?.image_path;
            state.status = 'succeeded';
        },
        [secondCategories.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        },
    },
});
export default secondCategorySlice.reducer;
