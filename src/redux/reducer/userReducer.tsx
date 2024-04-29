import { createSlice } from "@reduxjs/toolkit";

// Initial states constructed
export type TState = {
    user: {
        email: string;
        password: string;
    };
    login: boolean;
    data: any[];
}

export type TAction = {
    payload: any;
    type: string;
}

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
        setUserEmail: (state: TState, action: TAction) => {
            state.user.email = action.payload;
        },
        setUserPassword: (state: TState, action: TAction) => {
            state.user.password = action.payload
        },
        setLogin: (state: TState, action: TAction) => {
            state.login = action.payload
        },
        setData: (state: TState, action: TAction) => {
            state.data = [...state?.data, ...action?.payload]
        },
        setLogout: (state: TState) => {
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