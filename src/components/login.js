import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin, setUserEmail, setUserPassword } from "../redux/reducer/userReducer";
import './login.css';


// import { persistStore } from 'redux-persist';
// import { store } from '../redux/store/store'; // Assuming your Redux store is defined in this file
// const persistor = persistStore(store);

// Clear storage
// persistor.purge().then(() => {
//   console.log('Storage cleared successfully');
// }).catch((error) => {
//   console.error('Error clearing storage:', error);
// });


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPass, setErrorPass] = useState("")
    const [submit, setSubmit] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginFunc = () => {
        if (submit && !errorEmail && !errorPass) {
            navigate('/screen')
            dispatch(setLogin(true))
            dispatch(setUserEmail(email))
            dispatch(setUserPassword(password))
        }

    }

    useEffect(() => {
        if (submit) {
            loginFunc()
        }
    }, [submit])

    useEffect(() => {
        setSubmit(false)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrorEmail(!emailRegex.test(email))
        console.log(emailRegex.test(email))
    }, [email])

    useEffect(() => {
        setSubmit(false)
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        setErrorPass(!passwordRegex.test(password))
        console.log("pw test", passwordRegex.test(password))
    }, [password])


    return (
        <>
            <header className="heading">
                <h1>Kanban Board</h1>
            </header>
            <div className="login">
                <h2>LOGIN HERE</h2>
                <div className="details">
                    <label>Email: </label>
                    <input type="text" placeholder="email" onChange={(e) => { setEmail(e?.target?.value) }} value={email} />
                    {submit && errorEmail && <div className="popover-email">Please enter a valid email address.</div>}

                    <br />
                    <label>Password : </label>
                    <input type="password" placeholder="password" onChange={(e) => { setPassword(e?.target?.value) }} value={password} />
                    {submit && errorPass && <div className="popover-pw">Password must be at least 8 characters including a-z, A-Z and 0-9.</div>}

                    <br />
                    <button className="login-btn" onClick={() => { loginFunc(); setSubmit(true) }}>Submit</button>
                </div>
            </div>
        </>

    )
}

export default Login;