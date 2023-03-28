import React from 'react';
import './Signin.css';
import Image from '../../../Source/Image/doctor.png';

export default function Signin() {
    return (
        <div>
            <main>
                <aside>
                    <form action="#">
                        <p className='welTitle'>Hi, Welcome Back!👋</p>
                        <label>Email</label>
                        <input type="email" />
                        <label>Password</label>
                        <input type="password" />
                        <button>Sign In</button>
                    </form>
                </aside>

                <section>
                    <p className='signUpTitile'>New Here?</p>
                    <p className='signUpSubTitle'>Sign up and discover a grate things.</p>
                    <p className='signupBtn'>Sign Up</p>
                    <img className='image' src={Image} alt="Image" />
                </section>
            </main>
        </div>
    );
} 