import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';


const Shop = () => {

    const [products, setProducts] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [modalId, setModalId] = useState(null);

    useEffect(() => {

        const fetchProducts = async () => {
            const data = await axios.get('https://fakestoreapi.com/products')
            setProducts(data.data)
        }

        fetchProducts();

    }, [])


    return (
        <div className='relative flex justify-center align-top px-10 py-10 gap-10 flex-wrap bg-slate-200 '>

            {
                showModal && (
                    <div className='absolute  bg-slate-800  h-screen w-screen top-0 left-0 flex justify-center items-start pt-10'>
                        <ProductModal 
                            id={modalId}
                            setShowModal={setShowModal}
                        />
                    </div>
                )
            }


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
                            showModal={showModal}
                            setShowModal={setShowModal}
                            setModalId={setModalId}
                        />
                    )
                })
            }
        </div>
    )
}

export default Shop