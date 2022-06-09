import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header({ user, handleLogout, handleShowHistory }) {
    if (user) {
        return (
            <>
                <header>
                    <nav>
                        <div className='left-nav'>
                            <Link to='/'><img src={'/OnTime.jpg'} className='logo' /></Link>
                            <Link to='/about'>About Us</Link>
                            <a href='/trip'>Ride</a>
                            <a href='/trip/#history' onClick={handleShowHistory}>See History</a>
                        </div>                    
                        
                        <div className='right-nav'>
                            <img src={user.photoUrl} className='nav-avatar' />
                            <a href={`/${user.name}`}>{user.name}</a>
                            <a href='' onClick={handleLogout}>Log Out</a>
                        </div>
                    </nav>
                </header>
            </>
    )
}

    return (
        <>
            <header>
                <nav>
                    <div className='left-nav'>
                        <a href='/'><img src={'/OnTime.jpg'} className='logo' /></a>
                    </div>

                    <div className='right-nav'>
                        <a href='/login'>Log In</a>
                        <a href='/signup'>Sign Up</a>
                    </div>
                </nav>
            </header>
        </>
    )
}