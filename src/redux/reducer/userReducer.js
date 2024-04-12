import { createSlice } from "@reduxjs/toolkit";

// Initial states constructed
const initialState = {
    user: {
        email: "",
        password: ""
    },
    login: false,
    data: [],
}


export const userDetail = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUserEmail: (state, action) => {
            state.user.email = action.payload;
        },
        setUserPassword: (state, action) => {
            state.user.password = action.payload
        },
        setLogin: (state, action) => {
            state.login = action.payload
        },
        setData: (state, action) => {
            state.data = [...state.data, ...action.payload]
        },
        setLogout: (state) => {
            state.user = {
                email: "",
                password: ""
            };
            state.data = [];
        },

    }
})


export const { setUserEmail, setUserPassword, setLogin, setData, setLogout } = userDetail.actions;
export default userDetail.reducer;