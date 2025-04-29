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

    const handlesigninLogout = () => {
        if (isLoggedIn) {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
            navigate("/signin");
        } else {
            navigate("/signin");
        }
    }

    const handleProtectedRoute = (path) => {
        if (isLoggedIn) {
            navigate(path);
        } else {
            navigate("/signin");
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
                    onClick={handlesigninLogout}
                    className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
                >
                    {isLoggedIn ? 'Logout' : 'signin'}
                </button>
                <button
                    onClick={() => handleProtectedRoute("/admin")}
                    className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
                >
                    A
                </button>
            </div>
        </nav>
    )
}

export default Navbar;