import React from 'react'

import './cart.css'

function Cart() {
    return (

        <div className="small-container cart-page">

            <table>
                <tr>
                    <th id="cart-product">Product</th>
                    <th id="cart-quantity">Quantity</th>
                    <th id="cart-subtotal">Subtotal</th>
                </tr>
            </table>

            <table className="holdItems">

                <tr class='details'>
                    <td>
                        <div className="cart-info">
                            <img src="/images/poster.jpg" alt="movie image" />
                            <div>
                                <p>Description</p>
                                <small className='itemPrice'>Price:<i className="fa-solid fa-dollar-sign"></i>40</small>
                                <br />
                                <button className='remve'>Remove</button>
                            </div>
                        </div>
                    </td>
                    <td><input className='inputArrows' type="number" min='0' /></td>
                    <td className='sub-total'><i className="fa-solid fa-dollar-sign"></i>40</td>
                </tr>

            </table>

            <div className="total-price">
                <table>

                    <tr>
                        <td>Total</td>
                        <td className="total">40</td>
                    </tr>
                </table>
            </div>


        </div>
    )
}

export default Cart