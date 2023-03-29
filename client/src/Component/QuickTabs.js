import React from 'react';
import MainTile from './MainTile';
import ComingAppointments from './ComingAppointments';
import AvaliableDoctors from './AvaliableDoctors';

const QuickTabs = () => {
    return (
        <div>
            <MainTile />

            <hr />

            <div class="row p-4">
                <ComingAppointments />
                <AvaliableDoctors />
            </div>
        </div>
    )
}

export default QuickTabs