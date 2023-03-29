import React from 'react';
import './Signin.css';
import Image from '../../Source/Image/doctor.png';

export default function Signin() {
    return (
        <div className='container-fluid'>
            <div class="row m-5">
                <div class="col-md-5 p-5">
                    <form className='bg-white border p-5'>
                        <h2 className='text-center mb-5'>Hi! Wellcome Back 👋</h2>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button className='btn btn-primary'>Sign In</button>
                    </form>
                </div>
                <div class="col-md-7 text-center pt-5" >
                    <h1 className='text-center text-white'>New Here?</h1>
                    <h2 className='text-center text-white mb-5'>Sign up and discover a grate things.</h2>
                    <img src={Image} alt="Image" />
                </div>
            </div>
        </div>
    );
} 