import React from 'react';
import './Intro.css';
import { Link } from 'react-router-dom';

export default function Intro() {
    return (
    <div className='body'>
        <div className='content'>
            <h1>onTime</h1>
            <h3>Never miss another doctor's appointment</h3>

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