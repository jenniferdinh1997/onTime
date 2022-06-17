import React from 'react';
import './Footer.css';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
        <MDBContainer className='p-3'>
        <section className='mb-3'>
            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                <MDBIcon fab icon='facebook-f' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                <MDBIcon fab icon='twitter' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                <MDBIcon fab icon='instagram' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                <MDBIcon fab icon='linkedin-in' />
            </a>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Company</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/about' className='text-white'>About Us</a>
                </li>
                <li>
                  <a href='#!' className='text-white'>Careers</a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Products</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>Ride</a>
                </li>
                <li>
                  <a href='#!' className='text-white'>Drive</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

        <div className='text-start p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <p className='copyright'>© 2022 Copyright onTime</p>
        </div>
    </MDBFooter>
    )
}