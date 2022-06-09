import React from 'react';
import './Intro.css';

export default function Intro() {
    return (
    <div className='body'>
        <div className='content'>
            <h1>onTime</h1>
            <h3>Never miss another doctor's appointment</h3>

            <div className='buttons'>
                <button>
                    <span class="transition"></span>
                    <span class="gradient"></span>
                    <span class="label"><a href='/about'>Learn More</a></span>
                </button>
                <button>
                    <span class="transition"></span>
                    <span class="gradient"></span>
                    <span class="label">Sign Up to Drive</span>
                </button>
            </div>
        </div>
    </div>
    )
}