import { createSlice } from "@reduxjs/toolkit";
const LoginSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,

    },
    reducers: {
        LoginStart: (state) =>
        {
            state.isFetching=true
        },
        LoginSuccess: (state, action) =>
        { 
            state.isFetching = false;
            state.currentUser=action.payload 
        },
        LoginFail: (state, action) =>
        { 
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { LoginStart, LoginSuccess, LoginFail } = LoginSlice.actions;
export default LoginSlice.reducer;