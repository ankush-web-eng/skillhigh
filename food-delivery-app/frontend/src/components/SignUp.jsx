import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [role, setRole] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleSignUp = async () => {
        if (!email || !password || !name || !address) {
            alert("Please fill all the fields");
            return;
        }
        setLoading(true);
        try {
            const data = {
                name,
                email,
                password,
                address,
                role: role ? "admin" : "user"
            }

            const response = await axios.post(`${import.meta.env.VITE_PUBLIC_API_URL}/auth/signup`, data);
            console.log(response.data);
            if (response.status === 201) {
                alert("User created successfully");
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
                <span className="">Enter your name</span>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <span className="">Enter your Address</span>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <div className="flex space-x-3">
                    <span>Do you own a restraunt</span>
                    <input
                        value={role}
                        onChange={(e) => setRole(e.target.checked)}
                        type="checkbox"
                    />
                </div>
                <button
                    className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
                    type="button"
                    disabled={loading}
                    onClick={handleSignUp}
                >Signup</button>
                <Link
                    className="text-blue-500 hover:text-blue-800 text-sm mt-4 block text-center"
                    to="/signin">Signin</Link>
            </form>
        </div>
    )
}

export default SignUp;