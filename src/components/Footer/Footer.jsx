import React from 'react';
import './Footer.css';
import {
    MDBIcon
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

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

            <section className='footer-links'>
              <div className='company'>
                <h5>COMPANY</h5>
                <Link to='/about'>About Us</Link>
                <a href='#'>Careers</a>
              </div>

              <div className='products'>
                <h5>PRODUCTS</h5>
                <a href='/trip'>Ride</a>
                <a href='#'>Drive</a>
              </div>
            </section>

        <div className='text-start p-1'>
          <p id="copyright">© 2022 Copyright Healthshare</p>
        </div>
    </div>
    )
}