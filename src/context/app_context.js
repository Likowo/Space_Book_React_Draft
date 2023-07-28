import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [ windowWidth, setWindowWidth ] = useState(1000)

    window.onresize = () => {
        console.log('window is resizing')
        setWindowWidth(window.innerWidth)
        console.log(windowWidth)
    }

    // window.addEventListener('resize', () => {
    //     console.count('window is resizing')
    //     console.log(window.screen.width)
    //     // setWindowWidth(screen.width)

    //     // console.log(windowWidth)
    // })

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
    
    // JENNA API-----------------------------------
    const [ characters, setCharacters ] = useState([])
    const [ mainProfile, setMainProfile ] = useState({})
    const [ limitCharacters, setLimitCharacters ] = useState([])

    const array = []

    const fetchRick = async (URL) => {
        const response = await axios.get(URL)
        // console.log(response)
        const data = response.data.results
        // console.log(data)
        URL = response.data.info.next
        // console.log(URL)

        array.push(...data)
        if(URL){
            URL = response.data.info.next
            // console.log("url exists")
            fetchRick(URL)
        }
        // console.log(array)
    }
    
    
    useEffect(() => {
        setCharacters(array)
        
        return () => {
            fetchRick('https://rickandmortyapi.com/api/character?page=1')
            console.log('unmount')
            console.log(array)
        }
    }, [])
    
    useEffect(() => {
        console.log(`CHARACTERS ARRAY`, characters)
        setMainProfile(characters[0])
    }, [array])
    
    
    const grabCharacters = (howMany) => {

        let array = []
        for(let i = 0; i < howMany; i++){
            // setLimitCharacters(characters[i])
            array.push( characters[i] )
        }
        // console.log(limitCharacters)
        return array
    }
    


    // --------------------------------------------


    // DOUGS API------------------------------------
    // --------------------------------------------

    // ANN API------------------------------------
    // --------------------------------------------











    return(
        <AppContext.Provider value={{
            windowWidth,
            characters, grabCharacters, mainProfile
        }}>
            {props.children}
        </AppContext.Provider>

    )
}

export default AppContextProvider