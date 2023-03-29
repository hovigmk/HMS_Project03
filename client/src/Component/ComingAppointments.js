import { useEffect, useState } from 'react';

const ComingAppointments = () => {

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
        <div class="col-lg-7 col-md-6 col-sm-12 caSection">
            <h4 class="title mt-3 mb-3 text-center text-secondary text center">
                Coming Appointments
            </h4>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead class="thead-light">
                        <tr>
                            <th>No</th>
                            <th>Label</th>
                            <th>Header</th>
                            <th>Column</th>
                            <th>Record Data</th>
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
    );
}

export default ComingAppointments