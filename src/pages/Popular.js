import React, {useEffect, useState } from 'react'
import './style.css'




const API_KEY = '&api_key=89e57dcae9771ece73cf9ab5b6d61244'
let base_url = 'https://api.themoviedb.org/3'
let url = base_url + '/discover/movie?sort_by=popularity.desc' + API_KEY

function Popular() {

    

    let image_path = " https://image.tmdb.org/t/p/w500"

    const [movies, setMovies] = useState([])
    //const [url_set, setUrl] = useState(url)



    // useEffect(()=>{
    //     const storedMovies = JSON.parse(localStorage.getItem('movies'))
    //     if(storedMovies){
    //         setMovies(storedMovies);
    //     }
      
    //   },[])
    
    //   useEffect(()=>{

    //     localStorage.setItem('movies',JSON.stringify(movies))
    //   }, [movies])



    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data.results)
                setMovies(data.results)
                // console.log(movies)
            })
    }, [])

const buttonClicked=()=>{
    console.log('Button clicked')
}


const generatePrice =(min,max)=>{
    let price = Math.floor(Math.random() *(max - min + 1)) + min;
    return(price)
}


    return (
        <>
            <div className='container'>

                {movies.length === 0 ? <p className='notfound'>Not found</p> : movies.map((movie) => {

                    return (


                        <div key={movie.id} className='movie'>
                            <img alt='moviePoster' src={image_path + movie.poster_path} className='poster'></img>
                            <div className='movie-details'>
                                <div className='box'>

                                    <h4 className='title'>{movie.title}</h4>
                                    <p className='rating'>{movie.vote_average}</p>
                                    <p className='price'><i className="fa-solid fa-dollar-sign"></i>{generatePrice(2,10)}</p>
                                    


                                </div>

                                <div className='overview'>

                                    <h1>Description</h1>

                                    {movie.overview}
                                </div>





                            </div>


                            

                            
                            <button onClick={buttonClicked} className='add-btn'>Add to Cart</button>

                            

                        </div>




                    )
                })
                }

               

            </div>

        </>
    )
}

export default Popular