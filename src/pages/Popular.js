import React, { useEffect, useState } from 'react'
import './style.css'



const API_KEY = '&api_key=89e57dcae9771ece73cf9ab5b6d61244'
let base_url = 'https://api.themoviedb.org/3'
let url = base_url + '/discover/movie?sort_by=popularity.desc' + API_KEY

function Popular() {

    let image_path = " https://image.tmdb.org/t/p/w500"

    const [movies, setMovies] = useState([])
    //const [url_set, setUrl] = useState(url)



    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data.results)
                setMovies(data.results)
                // console.log(movies)
            })
    }, [movies])




    return (
        <>
            <div className='container'>

                {movies.length === 0 ? <p className='notfound'>Not found</p> : movies.map((movie) => {
                    return (


                        <div className='movie'>
                            <img alt='moviePoster' src={image_path + movie.poster_path} className='poster'></img>
                            <div className='movie-details'>
                                <div className='box'>

                                    <h4 className='title'>{movie.title}</h4>
                                    <p className='rating'>{movie.vote_average}</p>

                                </div>

                                <div className='overview'>

                                    <h1>Description</h1>

                                    {movie.overview}
                                </div>




                            </div>



                        </div>

                    )
                })
                }



            </div>

        </>
    )
}

export default Popular