import { useState } from "react";
import apiAxiosInstance, { setAccessToken } from "../service/axiosInstance";
import './Auth.css'; 

function RegistrationPage({ setUser }) {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const registrationUser = (event) => {
        event.preventDefault();

        if (confirm === password) {
            apiAxiosInstance.post('/auth/registration', { login, email, password })
                .then(({ data }) => {
                    setAccessToken(data.accessToken);
                    setUser(data.user);
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="auth-page">
            <h1>Registration</h1>
            <form onSubmit={registrationUser}>
                <input type="text" onChange={({ target }) => setLogin(target.value)} placeholder="Login" required />
                <input type="text" onChange={({ target }) => setEmail(target.value)} placeholder="Email" required />
                <input type="password" onChange={({ target }) => setPassword(target.value)} placeholder="Password" required />
                <input type="password" onChange={({ target }) => setConfirm(target.value)} placeholder="Confirm password" required />
                <button type="submit">Registration</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
