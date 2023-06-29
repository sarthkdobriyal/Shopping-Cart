import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';


const Shop = () => {

    const [products, setProducts] = useState(null);
 

    useEffect(() => {

        const fetchProducts = async () => {
            const data = await axios.get('https://fakestoreapi.com/products')
            setProducts(data.data)
        }

        fetchProducts();

    }, [])


    return (
        <div className='flex justify-center align-top px-10 py-10 gap-10 flex-wrap bg-slate-200'>
            {
                products && products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            category={product.category}
                            description={product.description}
                            id={product.id}
                            image={product.image}
                            price={product.price}
                            rating={product.rating}
                            title={product.title}
                        />
                    )
                })
            }
        </div>
    )
}

export default Shop