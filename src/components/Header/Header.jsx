import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer,
    MDBIcon
  } from 'mdb-react-ui-kit';
import { Image } from 'semantic-ui-react';

export default function Header({ user, handleLogout }) {
    if (user) {
        return (
            <>
                <header>
                    <MDBNavbar expand='sm' light bgColor='white' fixed='top'>
                        <MDBContainer fluid>                          
                            <div className='collapse navbar-collapse'>
                                <MDBNavbarNav left className='me-auto'>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='/'>App Name</MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='/'>About Us</MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='/trip'>Request a Ride</MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='/trip/#history'>See Ride History</MDBNavbarLink>
                                    </MDBNavbarItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav className='ms-auto'>
                                    <Image src={user.photoUrl} avatar></Image>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href={`/${user.name}`}>{user.name}</MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='' onClick={handleLogout}>Log Out</MDBNavbarLink>
                                    </MDBNavbarItem>
                                </MDBNavbarNav>
                            </div>
                        </MDBContainer>
                    </MDBNavbar>
        </header>
    </>
    )
}

    return (
        <>
            <MDBNavbar expand='sm' light bgColor='white' fixed='top'>
                <MDBContainer fluid>
                    <MDBNavbarNav right className='ms-auto'>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/login'>Log In</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/signup'>Sign Up</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}