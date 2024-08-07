/* eslint-disable react/prop-types */
import { useState } from "react";
import apiAxiosInstance, { setAccessToken } from "../service/axiosInstance";
import { useNavigate } from "react-router-dom";
import './Auth.css'; // Подключаем стили

function AuthorizationPage({ setUser }) {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const authorizationUser = (event) => {
        event.preventDefault();
       
        apiAxiosInstance.post('/auth/authorization', { email, password })
            .then(({ data }) => {
                setAccessToken(data.accessToken);
                setUser(data.user);
                navigate('/');
            })
            .catch(err => {
                setError(err.response.data.message);
            });
    }

    return (
        <div className="auth-page">
            <h1>Authorization</h1>
            <form onSubmit={authorizationUser}>
                <input type="text" onChange={({ target }) => setEmail(target.value)} placeholder="Email" required />
                <input type="password" onChange={({ target }) => setPassword(target.value)} placeholder="Password" required />
                <button type="submit">Authorization</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default AuthorizationPage;
