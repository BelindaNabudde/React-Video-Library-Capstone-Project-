import React, {useState, createContext} from "react";

const AppContext = createContext();

function ContextProvider({children}){




    const [selectedMovie, setSelectedMovie] = useState(
        {   
            id:'',
            image:'',
            title:'',
            price:'',
            rating:'',
            amount:'',
            subtotal:''

        }
    
    )

    const handleCartItems =(cartData)=>{

        // setSelectedMovie([...cartData])
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

// above, the provider is not a default, so when importing it, you have to destructure it ie {ContextProvider}: check App.js line 14