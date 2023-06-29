import React, { useContext } from 'react'
import CartContext from '../CartContext'
import CartCards from '../components/CartCards'

const Cart = () => {

    const { cartItems, getTotal } = useContext(CartContext)


    return (
        <div className='flex w-screen h-screen bg-slate-200 '>

            <div className='w-[70%] flex flex-col py-5 '>
                <span className='text-4xl font-bold ml-10 mb-10'>Your Cart: </span>
                {cartItems.length === 0 ? ((
                    <span className='text-xl text-center ml-10 mb-10'>Your Cart is Empty</span>
                )) : (cartItems.map((product) => {
                    return (
                        <CartCards
                            key={product.id}
                            category={product.category}
                            description={product.description}
                            id={product.id}
                            image={product.image}
                            price={product.price}
                            rating={product.rating}
                            title={product.title}
                            quantity={product.quantity}
                        />
                    )
                }))}
            </div>

            <div className='w-[30%] flex h-[40%] py-10 '>
                <div className='relative border rounded-md w-full'>

                    <div className='flex items-center space-x-10 p-5 bg-gray-100 text-xl text-gray-600 py-20'>


                        <div>
                            <p className='text-XL font-bold'>YOUR SUBTOTAL</p>
                            <p className='text-green-600 text-xl font-bold'>
                                ${getTotal()}
                            </p>
                        </div>

                        <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>
                            {cartItems.length} items
                        </p>



                    </div>
                    <button className=' py-6 px-10 bg-yellow-400 text-xl text-black w-full rounded-md font-bold hover:bg-yellow-500 active:translate-y-2'>
                        Proceed to Checkout
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Cart