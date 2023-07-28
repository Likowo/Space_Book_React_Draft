import { useContext } from 'react';
import './App.css';
import Desktop from './pages/Desktop';
import Mobile from './pages/Mobile';
import Tablet from './pages/Tablet';
import { AppContext } from './context/app_context';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
function App() {
  let { windowWidth } = useContext(AppContext)
  console.log(window.innerWidth)
  const hide = (toeNail) => {
    toeNail.classList.add('hide')
  }
    if(windowWidth <= 390){
      return (
        <>
          <Link to='/home' className="mainLink" onClick={(e) => hide(e.target)}> SPACEBOOK </Link>
          <Routes>
            <Route path="/home" element={<Mobile />}/>
          </Routes>
        </>
      )
    }
    if(windowWidth <= 1200 ){
      return (
        <>
          <Link to='/home' className="mainLink" onClick={(e) => hide(e.target)}> SPACEBOOK </Link>
          <Routes>
            <Route path="/home" element={<Tablet />}/>
          </Routes>
        </>
      )
    }
    if(windowWidth > 1200){
      return (
        <>
          <Link to='/home' className="mainLink" onClick={(e) => hide(e.target)}> SPACEBOOK </Link>
          <Routes>
            <Route path="/home" element={<Desktop />}/>
          </Routes>
        </>
      )
    }
}
export default App;