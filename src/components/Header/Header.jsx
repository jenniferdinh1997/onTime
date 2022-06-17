import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header({ user, handleLogout, handleShowHistory, handleShowForm }) {
    if (user) {
        return (
            <>
                <header>
                    <nav>
                        <div className='left-nav'>
                            <Link to='/' style={{fontWeight: '700'}}>onTime</Link>
                            <Link to='/about'>About Us</Link>
                            <Link to='/trip' onClick={handleShowForm}>Ride</Link>
                            <Link to='/trip/#history' onClick={handleShowHistory}>See History</Link>
                        </div>                    
                        
                        <div className='right-nav'>
                            <img src={user.photoUrl} className='nav-avatar' />
                            <Link to={`/${user.name}`}>{user.name}</Link>
                            <Link to='' onClick={handleLogout}>Log Out</Link>
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
                        <Link to='/' style={{fontWeight: '700'}}>onTime</Link>
                    </div>

                    <div className='right-nav'>
                        <Link to='/login'>Log In</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}