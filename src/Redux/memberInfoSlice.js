import { createSlice } from '@reduxjs/toolkit';
import { getMemberInfo } from './services';

export const memberInfoSlice = createSlice({
    name: 'memberInfo',
    initialState: {
        memberInfoData: undefined,
        email: undefined,
        status: '',
    },
    extraReducers: {
        [getMemberInfo.pending]: state => {
            state.status = 'loading';
        },
        [getMemberInfo.fulfilled]: (state, action) => {
            state.memberInfoData = action.payload?.data
            state.email = action.payload?.data.email
            state.status = 'succeeded';
        },
        [getMemberInfo.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        },
    },
});

export default memberInfoSlice.reducer;
