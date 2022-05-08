import { createSlice } from '@reduxjs/toolkit';
import { removeCartProcess } from './services';

export const removeFromCartSlice = createSlice({
    name: 'removeCart',
    initialState: {
        loading: false,
        status: undefined
    },
    reducers: {},
    extraReducers: {
        [removeCartProcess.pending]: (state, action) => {
            state.loading = true;
        },
        [removeCartProcess.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload?.status;
        },
    },
});

export default removeFromCartSlice.reducer;
