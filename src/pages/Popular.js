import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import Header from '../components/Header'

import { AppContext } from '../context/AppContext'




const API_KEY = '&api_key=89e57dcae9771ece73cf9ab5b6d61244'
let base_url = 'https://api.themoviedb.org/3'
let url = base_url + '/discover/movie?sort_by=popularity.desc' + API_KEY

function Popular() {

    const [cart, setCart] = useState([]);

    const context = useContext(AppContext)


    let image_path = " https://image.tmdb.org/t/p/w500"

    const [movies, setMovies] = useState([])
    //const [url_set, setUrl] = useState(url)


    // useEffect(()=>{
    //     const storedMovies = JSON.parse(localStorage.getItem('movies'))
    //     if(storedMovies){
    //         setMovies(storedMovies);
    //     }




    //     localStorage.setItem('movies',JSON.stringify(movies))
    // })


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data.results)
                setMovies(data.results)
                // console.log(movies)



            })

        const storedMovies = JSON.parse(localStorage.getItem('movies'))
        if (storedMovies) {
            setMovies(storedMovies);
        }
    }, [])

    useEffect(() => {

        localStorage.setItem('movies', JSON.stringify(movies))
    }, [movies])




    const generatePrice = (min, max) => {
        let price = Math.floor(Math.random() * (max - min + 1)) + min;
        return (price)
    }


    const handleOnClick = (id, film) => {



        let moviData = {
            id: film.id,
            image: image_path + film.poster_path,
            title: film.title,
            price: 40,
            rating: film.vote_average,
            amount: 1,
        }









        // console.log(moviData)


        cart.push(moviData)

        context.handleCartItems(cart)
        console.log(cart)
        //console.log(context.selectedMovie)
        setCart(cart)




    }






    return (
        <>
            <Header />
            <div className='container'>

                {movies.length === 0 ? <p className='notfound'>Not found</p> : movies.map((movie) => {

                    return (


                        <div key={movie.id} className='movie'>
                            <img alt='moviePoster' src={image_path + movie.poster_path} className='poster'></img>
                            <div className='movie-details'>
                                <div className='box'>

                                    <h4 className='title'>{movie.title}</h4>
                                    <p className='rating'>{movie.vote_average}</p>
                                    <p className='price'><i className="fa-solid fa-dollar-sign"></i>{generatePrice(2, 10)}</p>



                                </div>

                                <div className='overview'>

                                    <h1>Description</h1>

                                    {movie.overview}
                                </div>





                            </div>





                            <button onClick={() => { handleOnClick(movie.id, movie) }} className='add-btn'>Add to Cart</button>



                        </div>




                    )
                })
                }



            </div>

        </>
    )
}

export default Popular