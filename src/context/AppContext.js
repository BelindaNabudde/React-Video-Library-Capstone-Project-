import React, {useState, createContext} from "react";

const AppContext = createContext();

function ContextProvider({children}){

    const [selectedMovie, setSelectedMovie] = useState(
        {   
            id:'',
            image:'',
            title:'',
            price:'',
            rating:''

        }
    
    )

    const handleCartItems =(cartData)=>{

        setSelectedMovie(cartData)
    }

    return(
        <AppContext.Provider value={{selectedMovie,handleCartItems}}>
            {children}
        </AppContext.Provider>
    )
}

export{
    AppContext,
    ContextProvider
}