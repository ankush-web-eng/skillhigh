import React, { useEffect } from "react";
import ProductList from './Product';
import axios from "axios";

const Cart = () => {

    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const getProducts = async () => {
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get(`${import.meta.env.VITE_PUBLIC_API_URL}/cart/get-product`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                console.log(response.data[0].items.product);
                const allItems = response.data[0].items.map(item => item.product)
                setProducts(allItems);
            } else {
                alert("An error occurred while fetching the products");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const handleOrderPlacing = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log(token);
            setLoading(true);
            const response = await axios.post(`${import.meta.env.VITE_PUBLIC_API_URL}/orders/place`, {}, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                alert("Order placed successfully!!");
                setProducts([]);
            } else {
                alert("An error occurred while placing the order");
            }
        } catch (error) {
            console.log(error);
            alert("An error occurred while placing the order");
        } finally {
            getProducts();
            setLoading(false);
        }

    }

    return (
        <div className="flex flex-col space-y-2">
            <button
                onClick={handleOrderPlacing}
                disabled={loading}
                className="bg-blue-500 w-fit m-3 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >Place Order</button>
            <ProductList products={products} />
        </div>
    )
}

export default Cart;