import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Header = ( {parent, windowWidth} ) => {

    const [ count, setCount ] = useState(0)

    const switchUnderline = (num) => {
        if(count === 4){
            setCount(0) // resetting count
        } else {
            setCount(num)
        }

        console.log(count)
    }


    const mobile = () => {
        return (
          <div className='header'>
            <h1>I AM THE HEADER for mobile</h1>
            <h1>{windowWidth}</h1>
          </div>
        )
    } 
    
    const tablet = () => {
        return(
            <div className='header'>
                <div className="left">
                    <img src='https://cdn.pixabay.com/photo/2020/10/17/13/19/facebook-5662065_1280.png' alt='logo' className='logo'/>
                    <div className="searchContainer">
                        <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' alt='search' className='search'/>

                    </div>
                </div>
                <div className="middle">
                    <p className={count === 0 && 'underline'} onClick={() => switchUnderline(0)}>home</p>
                    <p className={count === 1 && 'underline'} onClick={() => switchUnderline(1)}>video</p>
                    <p className={count === 2 && 'underline'} onClick={() => switchUnderline(2)}>market</p>
                    <p className={count === 3 && 'underline'} onClick={() => switchUnderline(3)}>friends</p>
                    <p className={count === 4 && 'underline'} onClick={() => switchUnderline(4)}>menu</p>
                </div>

                <div className="right">
                    <div className="iconContainer">
                        <img src='https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-PNG-Cutout.png' alt='plus' className=''/>
                    </div>
                    <div className="iconContainer">
                        <img src='https://www.freeiconspng.com/uploads/black-facebook-messenger-logo-29.png' alt='message' className=''/>
                    </div>
                    <img src='https://images.vexels.com/media/users/3/223298/isolated/preview/d3c070ed1d488a95f3789c88b7c95674-notifications-bell-icon-flat.png' alt='bell' className=''/>
                    <img src='https://img.freepik.com/premium-vector/grey-alien-character-illustration-avatar-profile-picture_19361-359.jpg?w=2000' alt='selfie' className='selfie'/>
                </div>
            </div>
        )
    }

    const desktop = () => {
        return(
            <div className='header'>
                <div className="left">
                    <img src='https://cdn.pixabay.com/photo/2020/10/17/13/19/facebook-5662065_1280.png' alt='logo' className='logo'/>
                    <div className="searchContainer">
                        <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' alt='search' className='search'/>

                    </div>
                </div>
                <div className="middle">
                    <p className={count === 0 && 'underline'} onClick={() => switchUnderline(0)}>home</p>
                    <p className={count === 1 && 'underline'} onClick={() => switchUnderline(1)}>video</p>
                    <p className={count === 2 && 'underline'} onClick={() => switchUnderline(2)}>market</p>
                    <p className={count === 3 && 'underline'} onClick={() => switchUnderline(3)}>friends</p>
                    <p className={count === 4 && 'underline'} onClick={() => switchUnderline(4)}>menu</p>
                </div>

                <div className="right">
                    <div className="iconContainer">
                        <img src='https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-PNG-Cutout.png' alt='plus' className=''/>
                    </div>
                    <div className="iconContainer">
                        <img src='https://www.freeiconspng.com/uploads/black-facebook-messenger-logo-29.png' alt='message' className=''/>
                    </div>
                    <img src='https://images.vexels.com/media/users/3/223298/isolated/preview/d3c070ed1d488a95f3789c88b7c95674-notifications-bell-icon-flat.png' alt='bell' className=''/>
                    <img src='https://img.freepik.com/premium-vector/grey-alien-character-illustration-avatar-profile-picture_19361-359.jpg?w=2000' alt='selfie' className='selfie'/>
                </div>
            </div>
        )
    }


    if( parent ==="mobile" ){
        return mobile()
    }
    if(parent ==="tablet"){
        return tablet()
    }
    if(parent ==="desktop"){
        return desktop()
    }
}

export default Header