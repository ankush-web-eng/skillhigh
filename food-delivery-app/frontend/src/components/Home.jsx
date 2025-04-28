import React, { useEffect } from "react";
import ProductList from './Product';
import axios from "axios";

const Home = () => {

    const [products, setProducts] = React.useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_PUBLIC_API_URL}/products/get-product`);
            if (response.status === 200) {
                console.log(response.data);
                setProducts(response.data);
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

export default Home;