import React from "react";
import axios from "axios";

const Form = () => {

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSignUp = async () => {
        if (!name || !description || !price || !category || !imageUrl) {
            alert("Please fill all the fields");
            return;
        }
        setLoading(true);
        const token = localStorage.getItem("token");
        try {
            const data = {
                name,
                description,
                price,
                category,
                imageUrl
            }

            const response = await axios.post(`${import.meta.env.VITE_PUBLIC_API_URL}/products/add-product`, data,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );
            console.log(response.data);
            if (response.status === 201) {
                alert("Product added successfully");
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
                >Add your product</h1>
                <span className="">Enter product's name</span>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <span className="">Enter description</span>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <span className="">Enter the category</span>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <span className="">Enter price of the product</span>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <span>Enter the url of the image</span>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    type="text"
                />
                <button
                    className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
                    type="button"
                    disabled={loading}
                    onClick={handleSignUp}
                >Add Product</button>
            </form>
        </div>
    )
}

export default Form;