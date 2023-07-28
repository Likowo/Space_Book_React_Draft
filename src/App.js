import { useContext } from 'react';
import './App.css';
import Desktop from './pages/Desktop';
import Mobile from './pages/Mobile';
import Tablet from './pages/Tablet';
import { AppContext } from './context/app_context';

function App() {

  let { windowWidth } = useContext(AppContext)

  console.log(window.innerWidth)

    if(windowWidth <= 390){
      return <Mobile />
    }
    
    if(windowWidth <= 1200 ){
      return <Tablet />
    }

    if(windowWidth > 1200){
      return <Desktop />
    }

  
}

export default App;
