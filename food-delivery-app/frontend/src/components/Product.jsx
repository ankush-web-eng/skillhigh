import axios from "axios";
import React from "react";

const ProductList = ({ products }) => {

    const [loading, setLoading] = React.useState(false);

    const handleToCart = async (productId) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please sign in to add products to cart");
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post(`${import.meta.env.VITE_PUBLIC_API_URL}/cart/add-product`, { productId },
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );
            if (response.status === 201) {
                alert("Product added to cart successfully");
            } else {
                alert("An error occurred while adding the product to cart");
            }
        } catch (error) {
            console.log(error);
            alert("An error occurred while adding the product to cart");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="grid grid-cols-3 p-6 gap-5">
            {products && products.map((product) => (
                <div key={product._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition">
                    <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
                    <div className="p-4">
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-lg font-semibold">Rs. {product.price}</p>
                        <button disabled={loading} onClick={() => handleToCart(product._id)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductList;