import { createContext, useEffect, useState } from "react";
export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [ windowWidth, setWindowWidth ] = useState(1300)

    window.onresize = () => {
        console.log('window is resizing')
        setWindowWidth(window.innerWidth)

        console.log(windowWidth)
    }

    // ideal data structure
    const person = {
        profilePic: 'rick and morty api pic',
        name: "name generate api/// or morty api",
        posts: [
            {
                text: 'random quotes',
            }
        ],
        homePlanet: 'nasa pics for'
    }

    // DOUGS API------------------------------------
    // --------------------------------------------

    // ANN API------------------------------------
    // --------------------------------------------

    // JENNA API------------------------------------
    // --------------------------------------------











    return(
        <AppContext.Provider value={{
            windowWidth
        }}>
            {props.children}
        </AppContext.Provider>

    )
}

export default AppContextProvider