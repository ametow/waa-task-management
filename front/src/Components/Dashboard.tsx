import {useNavigate} from "react-router-dom";
import {User} from "../App";

interface PropsType {
    user: User | null;
    logout: () => void;
}

export default function Dashboard({logout, user}:PropsType) {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to the protected dashboard!</p>
            <p>You are logged in as {user?.username}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}