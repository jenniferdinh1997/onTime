import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon
  } from 'mdb-react-ui-kit';
import { Image } from 'semantic-ui-react';

export default function Header({ user }) {
    if (user) {
        return (
            <>
                <header>
                    <MDBNavbar expand='lg' light bgColor='white' fixed>
                        <MDBContainer fluid>
                        <MDBNavbarToggler
                            aria-controls='navbarExample01'
                            aria-expanded='false'
                            aria-label='Toggle navigation'>
                        <MDBIcon fas icon='bars' />
                        </MDBNavbarToggler>
                        <div className='collapse navbar-collapse' id='navbarExample01'>
                            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                                <MDBNavbarItem active>
                                    <MDBNavbarLink aria-current='page' href='/'>App Name</MDBNavbarLink>
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
                                    <MDBNavbarLink href='/'>Log Out</MDBNavbarLink>
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
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
        </>
    )
}