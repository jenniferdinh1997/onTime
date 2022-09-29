import React from 'react';
import './Intro.css';
import { Link } from 'react-router-dom';

export default function Intro() {
    return (
    <div className='body'>
        <div className='content-left'>
            <img 
                src="/home3.png"
                alt="Doctor and patient"
                id="home-3"
            />
        </div>

        <div className='content-right'>
            <h1>Never miss another appointment</h1>
            <div className='buttons'>
                <button>
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label"><Link to='/about'>Learn More</Link></span>
                </button>
                <button>
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">Sign Up to Drive</span>
                </button>
            </div>
        </div>
    </div>
    )
}