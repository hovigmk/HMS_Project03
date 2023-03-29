import React from 'react'

const MainTile = () => {
    return (
        <div class="row mb-3 quickTabs">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="text-white h-100">
                    <div class="card-body">
                        <h6 >Today</h6>
                        <h1 >Appointments</h1>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2 ">
                <div class="card text-secondary bg-white cards">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-user fa-3x"></i>
                        </div>
                        <h3 className='mt-1'>Doctors</h3>
                        <h1 class="display-4 cardNumber">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2 ">
                <div class="card text-secondary bg-white cards">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-user fa-3x"></i>
                        </div>
                        <h3 className='mt-1'>Doctors</h3>
                        <h1 class="display-4 cardNumber">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2 ">
                <div class="card text-secondary bg-white cards">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-user fa-3x"></i>
                        </div>
                        <h3 className='mt-1'>Doctors</h3>
                        <h1 class="display-4 cardNumber">87</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainTile