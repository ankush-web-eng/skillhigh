import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLoginLogout = () => {
        if (isLoggedIn) {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
            navigate("/login");
        } else {
            navigate("/login");
        }
    }

    const handleProtectedRoute = (path) => {
        if (isLoggedIn) {
            navigate(path);
        } else {
            navigate("/login");
        }
    }

    return (
        <nav className="bg-orange-500 text-white flex justify-between items-center px-6 py-4">
            <h1
                className="cursor-pointer text-2xl font-bold"
                onClick={() => navigate("/")}
            >
                Foodie
            </h1>
            <div className="flex items-center space-x-6">
                <button
                    onClick={() => handleProtectedRoute("/cart")}
                    className="hover:underline transition duration-300 ease-in-out cursor-pointer"
                >
                    Cart
                </button>
                <button
                    onClick={() => handleProtectedRoute("/orders")}
                    className="hover:underline transition duration-300 ease-in-out cursor-pointer"
                >
                    Orders
                </button>
                <button
                    onClick={handleLoginLogout}
                    className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
                >
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;