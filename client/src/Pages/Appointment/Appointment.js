import React from 'react';
import './Appointment.css';
import Image from '../../../Source/Image/doctor.png';

export default function Appointment() {
    return (
        <div>
            <main>
                <aside>
                    <form action="#">
                        <label>Select Date</label>
                        <input type="date" />
                        <label>Select Your Doctor</label>
                        <input type="password" />
                        <label>Patient Name</label>
                        <input type="text" />
                        <label>Patient Contact Number</label>
                        <input type="tel" />
                        <label>Patient Email</label>
                        <input type="email" />
                        <button>Submit</button>
                    </form>
                </aside>

                <section>
                    <p className='title'>Doctor Channeling</p>
                    <p className='subTitle'>Make your appointment</p>
                    <img className='image' src={Image} alt="Image" />
                </section>
            </main>
        </div>
    );
}