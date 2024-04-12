import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DesignWeekly from "../components/designWeekly";
import Personal from "../components/personal";
import { setLogin, setLogout } from "../redux/reducer/userReducer";

const Screen = () => {
    const dispatch = useDispatch()
    // const user = useSelector(state => state.user)
    // console.log("user", user)


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