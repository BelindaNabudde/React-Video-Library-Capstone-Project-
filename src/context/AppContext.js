import React, {useState, createContext} from "react";

const AppContext = createContext();

function ContextProvider({children}){

    const [movies, setMovies] = useState(
        {
            title:'',
            price: '',
            rating:'',
            image:'',
            overview:''

        }
    
    )

    const handleMovies =(movieData)=>{

        setMovies(movieData)
    }

    return(
        <AppContext.Provider value={{movies,handleMovies}}>
            {children}
        </AppContext.Provider>
    )
}

export{
    AppContext,
    ContextProvider
}