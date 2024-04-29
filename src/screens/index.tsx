import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLogin, setLogout } from "../redux/reducer/userReducer.tsx";
import DesignWeekly from "../components/designWeekly.tsx";
import Personal from "../components/personal.tsx";

const Screen = () => {
    const dispatch = useDispatch()

    return (
        <div className="main-container">
            <nav className="nav-heading">
                <Link to='/'>
                    <button className="login-btn" onClick={() => {
                        dispatch(setLogin(false)); dispatch(setLogout())
                    }}>Logout</button>
                </Link>
            </nav>
            <DesignWeekly />
            <Personal />
        </div>
    )
}
export default Screen;