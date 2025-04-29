import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSignUp = async () => {
        if (!email || !password) {
            alert("Please fill all the fields");
            return;
        }
        setLoading(true);
        try {
            const data = {
                email,
                password,
            }

            const response = await axios.post(`${import.meta.env.VITE_PUBLIC_API_URL}/auth/signin`, data);
            console.log(response.data);
            if (response.status === 200) {
                alert("Signed in successfully");
                localStorage.setItem("token", response.data.token);
                navigate("/");
            } else {
                alert("An error occurred while creating the user");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="py-8 flex justify-center items-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
                <h1
                    className="font-bold text-2xl mb-4 text-center"
                >Signup here</h1>
                <span className="">Enter your email</span>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span className="">Enter your password</span>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
                    type="button"
                    disabled={loading}
                    onClick={handleSignUp}
                >Signin</button>
                <Link
                className="text-blue-500 hover:text-blue-800 text-sm mt-4 block text-center"
                to="/signup">Register</Link>
            </form>
        </div>
    )
}

export default SignIn;