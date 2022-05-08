import { createSlice } from '@reduxjs/toolkit';
import { thirdCategories } from './services';

export const thirdCategorySlice = createSlice({
    name: 'thirdCategory',
    initialState: {
        thirdCategoryData: undefined,
        image: undefined,
        control: undefined,
    },
    extraReducers: {
        [thirdCategories.pending]: state => {
            state.status = 'loading';
        },
        [thirdCategories.fulfilled]: (state, action) => {
            state.thirdCategoryData = action.payload?.data;
            state.image = action.payload?.image_path;
            state.control= action.payload?.status;
            state.status = 'succeeded';
        },
        [thirdCategories.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        },
    },
});
export default thirdCategorySlice.reducer;
