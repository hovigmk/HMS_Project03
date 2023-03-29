import { useEffect, useState } from 'react';

const Appointment = () => {

    const [record, setRecord] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resposne => resposne.json())
            .then(res => setRecord(res))
    }

    useEffect(() => {
        getData();
    },)
    return (
        <div class="col-lg-12 col-md-6 col-sm-12 ">
            <h2 class="title mt-3 mb-3 text-center text-secondary text center">
                All Appointments [ New/Completed]
            </h2>
            <div class="table-responsive caSection">
                <table class="table table-striped">
                    <thead class="thead-light">
                        <tr>
                            <th>Patient Name</th>
                            <th>Doctor</th>
                            <th>Date/Time</th>
                            <th>Age</th>
                            <th>Reschedule</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.slice(0, 7).map((output) =>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Appointment