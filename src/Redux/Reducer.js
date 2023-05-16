import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "auth",
    initialState: false,
    reducers: {
        login: () => { return true },
        logOut: () => { return false }
    }
})


export const { login, logOut } = authReducer.actions
export default authReducer