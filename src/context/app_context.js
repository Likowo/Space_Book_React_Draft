import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Desktop from "../pages/Desktop";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [windowWidth, setWindowWidth] = useState(1000);

  window.onresize = () => {
    // console.log("window is resizing");
    setWindowWidth(window.innerWidth);
    // console.log(windowWidth);
  };

  // window.addEventListener('resize', () => {
  //     console.count('window is resizing')
  //     console.log(window.screen.width)
  //     // setWindowWidth(screen.width)

  //     // console.log(windowWidth)
  // })

  //  BASIC API SETUP:
  //   const getInfo = () => {
  //     const response = awiat axios.get('')
  //     const info = response.data
  //     console.log(info)
  //   }

  //   useEffect(()=>{
  //     getInfo()
  //   },[])

  // ideal data structure
  const person = {
    profilePic: "rick and morty api pic",
    name: "name generate api/// or morty api",
    posts: [
      {
        text: "random quotes",
      },
    ],
    homePlanet: "nasa pics for",
  };

  // JENNA API-----------------------------------
  const [characters, setCharacters] = useState([]);
  const [mainProfile, setMainProfile] = useState({});
  const [limitCharacters, setLimitCharacters] = useState([]);

  const array = [];

  const fetchRick = async (URL) => {
    const response = await axios.get(URL);
    // console.log(response)
    const data = response.data.results;
    // console.log(data)
    URL = response.data.info.next;
    // console.log(URL)

    array.push(...data);
    if (URL) {
      URL = response.data.info.next;
      // console.log("url exists")
      fetchRick(URL);
    }
    // console.log(array)
  };

  useEffect(() => {
    setCharacters(array);

    return () => {
      fetchRick("https://rickandmortyapi.com/api/character?page=1");
      // console.log('unmount')
      // console.log(array)
    };
  }, []);

  useEffect(() => {
    // console.log(`CHARACTERS ARRAY`, characters)
    setMainProfile(characters[0]);
  }, [array]);

  const grabCharacters = (howMany) => {
    let array = [];
    for (let i = 0; i < howMany; i++) {
      // setLimitCharacters(characters[i])
      array.push(characters[i]);
    }
    // console.log(limitCharacters)
    return array;
  };

  // --------------------------------------------

  // DOUGS API------------------------------------
  // --------------------------------------------

  //**  ANN API------------------------------------ ***//
  //Step 1: Create function ( hint: async /await) to get data from random quotes API using axios

  //Step 2: Declare useState to hold the array of quotes

  //  const getRandomQuotes =async () => {
  //     const response = await axios.get('https://api.quotable.io/quotes')
  //     const randomQuotes = await response.data
  //     console.log(randomQuotes)
  //     setQuotes (response.data.results.author)
  //     .catch(err => {
  //         console.log(err)
  //     })
  //  };
//   function Desktop() {
//     const [quotes, setQuotes] = useState([]);

//     const getRandomQuotes = () => {
//       axios
//         .get("https://api.quotable.io/quotes")
//         .then((response) => {
//           console.log(response.data.results.author.content);
//           setQuotes(response.data.results.author.content);
          // console.log(getRandomQuotes)
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // getRandomQuotes();

    // useEffect(() => {
    // //   const controller = new AbortController();
    //   getRandomQuotes();
    //   // console.log(response)
    // }, []);

    //   return (
    //    <div className="Desktop">
    //      {/* Mapping through array of quotes to display as posts  */}

    //      <button onClick={getRandomQuotes}> Show Quote Of The Day </button>
         {/* <> 
         <li key={quotes.id} >{quotes && <p> {quotes} </p>} </li>
         </> */}

        {/* {quotes ? <p> {quotes} </p> : null } second return below */}
//         <ul>
//         {quotes?.map((quotes)=>{
//             return(
//                 <> 
//                 <li key={quotes.id} > {quotes[1].results[1].author[1]} </li>
//                 <li key={quotes.id}> {quotes[1].content[1]} </li>
//                 </>              
//             )
//         })
//         }
//       </ul> 
      
//       </div>
//     );
//   }

  // --------------------------------------------

  return (
    <AppContext.Provider
      value={{
        windowWidth,
        characters,
        grabCharacters,
        mainProfile,
        // quotes,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
