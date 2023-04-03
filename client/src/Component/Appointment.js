import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

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
        <Container>
            <Row >
                <Col >
                    <div class="col-lg-12 col-md-6 col-sm-12 ">
                        <h2 class="title mt-3 mb-3 text-center text-secondary text center ">
                            All Appointments [ New/Completed]
                        </h2>
                        <div class="table-responsive caSection bg-secondary p-4">
                            <Table striped hover >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        <th>Username</th>
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
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Appointment