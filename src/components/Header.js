import React from 'react'
import { Link } from 'react-router-dom'


import '../pages/style.css'


function Header() {



    return (
        <>

            <div className='header'>
                <nav>
                    <ul>
                        <li><Link to='/'>Popular</Link></li>
                        <li><Link to='/theatre'>InTheatre</Link></li>
                        <li><Link to='/drama'>Drama</Link></li>
                        <li><Link to='/kids'>Kids</Link></li>
                        <li><Link to='/comedy'>Comedy</Link></li>
                    </ul>
                </nav>
                <form className='search-btn'>
                    <input className='inputText' placeholder='Enter Movie name' type='text'></input>
                    <button><i className="fas fa-search"></i></button>



                </form>

                <div className='cart'>
                    <span>
                        <Link to='/cart'> <button ><i className="fas fa-cart-plus"></i></button></Link>
                    </span>
                    <span>0</span>
                </div>











            </div>

        </>
    )
}

export default Header