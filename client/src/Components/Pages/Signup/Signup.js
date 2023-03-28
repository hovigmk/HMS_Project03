import React from 'react';
import './Signup.css';
import Image from '../../../Source/Image/doctor.png';

export default function Signup() {
    return (
        <div>
            <main>
                <aside>
                    <form action="#">
                        <p className='welTitle'>Hi, Welcome Back!👋</p>
                        <label>Email</label>
                        <input type="email" />
                        <label>Contact Number</label>
                        <input type="tel" />
                        <label>Password</label>
                        <input type="password" />
                        <label>Re-Password</label>
                        <input type="password" />
                        <button>Sign Up</button>
                    </form>
                </aside>

                <section>
                    <p className='signUpTitile'>Already have Account?</p>
                    <p className='signUpSubTitle'>Sign in and discover a grate things.</p>
                    <p className='signupBtn'>Sign In</p>
                    <img className='image' src={Image} alt="Image" />
                </section>
            </main>
        </div>
    );
} 