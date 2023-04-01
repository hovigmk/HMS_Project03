import React, { useState } from 'react';
import './Signin.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import ImageDoctor from '../../Source/Image/doctor.png';



export default function Signin() {
    return (
            <Container>
                <Row>
                    <Col>
                        <Form className='bg-white border p-5'>
                            <Form.Label className='xxl bgcolor'>Hi, Welcome back 👋</Form.Label>
                            <Form.Group className="mb-3 bgcolor" controlId="formBasicEmail">
                                <Form.Label className='bgcolor'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted bgcolor">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 bgcolor" controlId="formBasicPassword">
                                <Form.Label className='bgcolor'>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                        </Form>
                    </Col>
                    <Col className='text-center'>
                        <h1 className='text-center text-white'>Already Member?</h1>
                        <h2 className='text-center text-white mb-5'>Sign in and discover a grate things.</h2>
                        <Image src={ImageDoctor} alt="Image" />
                    </Col>
                </Row>
            </Container>
    );
} 