import React from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { Image } from 'semantic-ui-react';

export default function Header({ user, handleLogout, handleShowHistory }) {
    if (user) {
        return (
            <>
                <header>
                    <MDBNavbar expand='sm' light bgColor='white' fixed='top'>
                        <MDBContainer fluid>                          
                            <div className='collapse navbar-collapse'>
                                <MDBNavbarNav left className='me-auto'>
                                    <MDBNavbarItem>
                                        <MDBNavbarBrand href='/'></MDBNavbarBrand>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='/'>About Us</MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='/trip'>Request a Ride</MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='/trip/#history' onClick={handleShowHistory}>See Ride History</MDBNavbarLink>
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
                    <MDBNavbarNav className='ms-auto'>
                        <MDBNavbarItem>
                            <MDBNavbarBrand href='/'></MDBNavbarBrand>
                        </MDBNavbarItem>
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