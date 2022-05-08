import { createSlice } from '@reduxjs/toolkit';
import { getFavorites } from './services';

export const getFavoritesSlice = createSlice({
    name: 'getFavory',
    initialState: {
        data: [],
        image: undefined,
        status: undefined,
        loading: false,
        message: undefined
    },
    reducers: {
        resetFavorites: state => {
            state.data = [];
            state.image = undefined;
            state.message = undefined;
            state.loading = false;
            state.status = '';
        },
    },
    extraReducers: {
        [getFavorites.pending]: (state, action) => {
            state.loading = true;
        },
        [getFavorites.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload?.status;
            state.data =
                action.payload?.data !== undefined
                    ? [...state.data, ...action.payload.data]
                    : [...state.data];
            state.image =
                action.payload?.image_path !== undefined
                    ? action.payload?.image_path
                    : state.image;
            state.message = action.payload?.message;
        },
        [getFavorites.rejected]: (state, action) => {
            state.error = action.error;
        },
    },
});

export const { resetFavorites } = getFavoritesSlice.actions;
export default getFavoritesSlice.reducer;
