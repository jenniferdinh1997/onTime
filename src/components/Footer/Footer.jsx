import React from 'react';
import './Footer.css';
import {
    MDBIcon,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <div className='footer'>
            <section className='footer-icons'>
                <a href='#'>
                    <MDBIcon fab icon='facebook-f' />
                </a>

                <a href='#'>
                    <MDBIcon fab icon='twitter' />
                </a>

                <a href='#'>
                    <MDBIcon fab icon='instagram' />
                </a>

                <a href='#'>
                    <MDBIcon fab icon='linkedin-in' />
                </a>
            </section>

            <section className='mb-3'>
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

        <div className='text-start p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <p className='copyright'>© 2022 Copyright onTime</p>
        </div>
    </div>
    )
}