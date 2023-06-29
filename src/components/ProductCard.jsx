import React, { useContext } from 'react'

import CartContext from '../CartContext';  

const ProductCard = ({id , title, price, description, category, image, rating}) => {


    const { cartItems, addToCart } = useContext(CartContext)



    const addItemToCart = () => {
        const item = {
            id, category, description, image, title, price, rating, quantity: 1
        }
        addToCart(item)
    }




    return (
        <div className='w-[30%] py-5 px-5 bg-slate-100 rounded-xl shadow-xl flex flex-col justify-center items-left'>

            

            <div className=' w-full flex justify-center align-center my-2'>
                <img src={image} alt={title} className='rounded-lg h-60' />
            </div>

            <div className=' flex flex-col gap-4 w-full justify-center mt-4 items-left'>
                <span className='text-lg font-bold leading-6'>{title}</span>
                <span className='-mt-3 italics text-sm text-slate-600'>{category}</span>
                <span></span>
                <span className='font-sans  font-semibold text-lg'>Price: <span className='italic text-green-600'>${price}</span> </span>
                <span>{description.slice(0,50)}...</span>

            </div>

            <button onClick={addItemToCart} className='w-full py-4 bg-stone-600 mt-10 font-bold text-slate-100 rounded-lg hover:bg-stone-900 active:translate-y-2'>
                Add to Cart
            </button>
            
        </div>
    )
}

export default ProductCard