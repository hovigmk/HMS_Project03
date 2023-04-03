import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainTile = () => {
    return (
        <Container >
            <Row >
                <Col>
                    <div class="col-xl-3 col-sm-6 py-2">
                        <div class=" h-100">
                            <div class="card-body">
                                <h6 >Today</h6>
                                <h1 >Appointments</h1>
                                <h1 class="display-4">134</h1>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="border p-2 rounded bg-success">
                        <div>
                            <h6 className='text-white'>Today</h6>
                            <h3 className='text-white'>Doctors</h3>
                            <h1 class="display-4 text-white">11</h1>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="border p-2 rounded bg-danger">
                        <div>
                            <h6 className='text-white'>available</h6>
                            <h3 className='text-white'>Beds</h3>
                            <h1 class="display-4 text-white">42</h1>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MainTile