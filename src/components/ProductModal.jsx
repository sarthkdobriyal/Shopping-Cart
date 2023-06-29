import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../CartContext';

const ProductModal = ({ id, setShowModal }) => {

    const [product, setProduct] = useState(null);

    const { addToCart } = useContext(CartContext)


    const addItemToCart = () => {
        const item = {
            id: id, category: product.category, description: product.description, image: product.image, title: product.image, price: product.price, rating: product.rating, quantity: 1
        }
        addToCart(item)
    }



    useEffect(() => {
        const fetchProduct = async () => {
            const data = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(data.data)
        }

        fetchProduct();
    }, [id])

    console.log(product)

    return (
        <div className='bg-white relative w-[90%] opacity-100 rounded-xl flex gap-5 p-5 items-start  justify-start'
        >
            {
                product && (
                    <>
                        <div className='flex p-1 justify-center align-center h-full '>
                            <img src={product.image} alt={product.title} className='rounded-lg h-96 w-96 ' />
                        </div>


                        <div className=' flex flex-col gap-4 w-full justify-center mt-14 ml-4 items-left h-full'>
                            <span className='text-lg font-bold leading-6'>{product.title}</span>
                            <span className='-mt-3 italics text-sm text-slate-600'>{product.category}</span>
                            <span></span>
                            <span className='font-sans  font-semibold text-lg'>Price: <span className='italic text-green-600'>${product.price}</span> </span>
                            <span className='w-[80%]'>{product.description}</span>

                            <button onClick={() => {
                                addItemToCart()
                                setShowModal((prev) => !prev)
                            }} className=' py-4 w-full m-auto bg-stone-600 mt-10 font-bold text-slate-100 rounded-lg hover:bg-stone-900 active:translate-y-2'>
                                Add to Cart
                            </button>

                        </div>


                    </>
                )
            }

            <div className='absolute right-10 top-5 cursor-pointer text-3xl font-semibold ' onClick={() => setShowModal((prev) => !prev)}>x</div>


        </div>
    )
}

export default ProductModal