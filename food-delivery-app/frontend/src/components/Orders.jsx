import React, { useEffect } from "react";
import ProductList from './Product';
import axios from "axios";

const Orders = () => {

    const [products, setProducts] = React.useState([]);

    const getProducts = async () => {
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get(`${import.meta.env.VITE_PUBLIC_API_URL}/orders/my-orders`, {
                headers : {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                const allOrders = [];
                response.data.forEach(order => (
                    order.items.forEach(item => (
                        allOrders.push(item.product)
                    ))
                ))
                console.log(allOrders)
                setProducts(allOrders);
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

    return (
        <ProductList products={products} />
    )
}

export default Orders;