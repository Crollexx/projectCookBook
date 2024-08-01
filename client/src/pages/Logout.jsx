import { useNavigate } from "react-router-dom";
import apiAxiosInstance, { setAccessToken } from "../service/axiosInstance";


function LogoutPage({user, setUser}) {

    const navigate = useNavigate();

    const logoutUser = () => {
        // event.preventDefault();
       
        apiAxiosInstance.delete('/auth/logout')
            .then(({data}) => {
                setAccessToken(data.accessToken);
                setUser(null);
                navigate('/auth/authorization');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <>
            <h1>Logout for {user.name}</h1>
            <button onClick={logoutUser}>Yes, exit!</button>
        </> 
    );
}

export default LogoutPage;