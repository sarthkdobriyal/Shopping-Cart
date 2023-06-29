import React, { useContext } from 'react'
import CartContext from '../CartContext'

const CartCards = ({id , title, price, description, category, image, rating, quantity}) => {
  
  
    const {  addToCart, removeFromCart } = useContext(CartContext)

    
    const addItemToCart = () => {
        const item = {
            id, category, description, image, title, price, rating, quantity: 1
        }
        addToCart(item)
    }

    const removeItemFromCart = () => {
        removeFromCart(id)
    }

    
   
    return (
    <div className='m-5 h-[30%] bg-slate-100  flex shadow-lg'>
        <div className='flex p-3 justify-center align-center'>
                <img src={image} alt={title} className='rounded-lg h-30 w-30' />
            </div>


            <div className=' flex flex-col gap-4 w-full justify-center mt-4 items-left'>
                <span className='text-lg font-bold leading-6'>{title}</span>
                <span className='-mt-3 italics text-sm text-slate-600'>{category}</span>
                <span></span>
                <span className='font-sans  font-semibold text-lg'>Price: <span className='italic text-green-600'>${price}</span> </span>
                <span>{description.slice(0,50)}...</span>

            </div>

            <div className='w-32 flex flex-col justify-between items-center py-2'>

                
            <button onClick={addItemToCart} className='border bg-slate-100 cursor-pointer p-2 shadow-inner text-xl font-bold rounded-lg active:translate-y-2'>
               +
            </button>

                <span className=' text-5xl font-bold italic  text-slate-800 '>
                    {quantity}
                </span>

                <button onClick={() => removeItemFromCart()} className='border bg-slate-100 cursor-pointer p-2 shadow-inner text-xl font-bold rounded-lg active:translate-y-2'>
               -
            </button>


            </div>

    </div>
  )
}

export default CartCards