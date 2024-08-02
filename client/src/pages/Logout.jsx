import { useNavigate } from "react-router-dom";
import apiAxiosInstance, { setAccessToken } from "../service/axiosInstance";
import './Auth.css'; // Подключаем стили

function LogoutPage({ user, setUser }) {
    const navigate = useNavigate();

    const logoutUser = () => {
        apiAxiosInstance.delete('/auth/logout')
            .then(({ data }) => {
                setAccessToken(data.accessToken);
                setUser(null);
                navigate('/auth/authorization');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="auth-page">
            <h1>Logout for {user.name}</h1>
            <button onClick={logoutUser}>Yes, exit!</button>
        </div>
    );
}

export default LogoutPage;
