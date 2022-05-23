import React, { useState, useContext } from 'react'

import './cart.css'

import { AppContext } from '../context/AppContext'


function Cart() {




    const context = useContext(AppContext)

    console.log(context.selectedMovie)

    const handleRemove =(id)=>{
        const arr = [...context.selectedMovie]
        let index = arr.findIndex(item => item.id === id)

        arr.splice(index,1)
        
        
        context.handleCartItems(arr);
        


        console.log(context.selectedMovie)

       
    }


    return (

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
                {context.selectedMovie.map((movie,pos) => {
                    return (
                        <tbody key={pos}>
                            <tr className='details'>
                                <td>
                                    <div className="cart-info">
                                        <img src={movie.image} alt="movie image" />
                                        <div>
                                            <p>{movie.title}</p>
                                            <small className='itemPrice'>Price:<i className="fa-solid fa-dollar-sign"></i>{movie.price}</small>
                                            <br />
                                            <button onClick={()=>{handleRemove(movie.id)}} className='remve'>Remove</button>
                                        </div>
                                    </div>
                                </td>
                                <td><input className='inputArrows' type="number" min={0}  /></td>
                                <td className='sub-total'><i className="fa-solid fa-dollar-sign"></i>40</td>
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
    )
}

export default Cart