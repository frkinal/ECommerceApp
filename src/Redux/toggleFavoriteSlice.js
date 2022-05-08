import { createSlice } from '@reduxjs/toolkit';
import { toggleFavorite } from './services';

export const toggleFavoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorite: undefined,
        message: undefined,
        loading: false,
        status: undefined,
    },
    reducers: {
        reset: state => {
            state.favorite = undefined;
            state.message = undefined;
            state.status = undefined;
            state.loading = false;
        },
    },
    extraReducers: {
        [toggleFavorite.pending]: state => {
            state.loading = true;
        },
        [toggleFavorite.fulfilled]: (state, action) => {
            state.loading = false;
            state.favorite = action.payload
            state.message = action.payload?.message
            state.status = action.payload?.status
        },
        [toggleFavorite.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    },
});

export const { reset } = toggleFavoriteSlice.actions;
export default toggleFavoriteSlice.reducer;
