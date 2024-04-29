import { combineReducers } from "redux";
import userDetail from "./userReducer.tsx";


const rootReducer = combineReducers({
    user: userDetail,
})


export default rootReducer;