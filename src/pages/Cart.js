import React, { useContext,useState } from 'react'
import Header from '../components/Header'
import './cart.css'

import { AppContext } from '../context/AppContext'


function Cart() {

    const [amount,setAmount] = useState(0);
    //const [total,setTotal] = useState([]);





    const context = useContext(AppContext)

    console.log(context.selectedMovie)

    const handleRemove = (id) => {
        const arr = [...context.selectedMovie]
        let index = arr.findIndex(item => item.id === id)

        arr.splice(index, 1)


        context.handleCartItems(arr);



        console.log(context.selectedMovie)


    }


    const addMovie = (item) => {
        //const ind = context.selectedMovie.indexOf(item)
        //const arr  = context.selectedMovie
        setAmount(item.amount += 1);
        console.log(amount)
        console.log(context.selectedMovie)


    }

    const subtractMovie = (item) => {
       setAmount( item.amount -= 1);
        if (item.amount === 0) {
            handleRemove();

        }


        console.log(context.selectedMovie)
    }


    const subTotal =(item)=>{
        item.subtotal = (item.amount * item.price)
        return ( item.subtotal);
        

        

    }

    




    return (
        <>
            <Header />
            <div className="small-container cart-page">

                <table>
                    <tbody>
                        <tr>
                            <th id="cart-product">Product</th>
                            <th id="cart-quantity">Quantity</th>
                            <th id="cart-subtotal">Subtotal</th>
                        </tr>
                    </tbody>
                </table>



                <table className="holdItems">
                    {context.selectedMovie.map((movie, pos) => {
                        return (
                            <tbody key={pos}>
                                <tr className='details'>
                                    <td>
                                        <div className="cart-info">
                                            <img src={movie.image} alt="movie-pic" />
                                            <div>
                                                <p>{movie.title}</p>
                                                <small className='itemPrice'>Price:<i className="fa-solid fa-dollar-sign"></i>{movie.price}</small>
                                                <br />
                                                <button onClick={() => { handleRemove(movie.id) }} className='remve'>Remove</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td >
                                        <button onClick={() => { subtractMovie(movie) }}>-</button>
                                        <button>{movie.amount}</button>
                                        <button onClick={() => { addMovie(movie) }}>+</button>
                                    </td>
                                    <td className='sub-total'><i className="fa-solid fa-dollar-sign"></i>{subTotal(movie)}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>

                <div className="total-price">
                    <table>
                        <tbody>
                            <tr>
                                <td>Total</td>
                                <td className="total">40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}

export default Cart