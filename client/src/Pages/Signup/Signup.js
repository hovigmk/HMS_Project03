import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import ImageDoctor from '../../Source/Image/doctor.png';

import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';
import Auth from '../utils/auth';

const bgcolor = { backgroundColor: '#3E3680' };

export default function Signup() {
    const [formState, setFormState] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
    });
    const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addProfile({
                variables: { ...formState },
            });

            Auth.login(data.addProfile.token);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div style={bgcolor}>
            <Container>
                <Row>
                    <Col >
                        <Form className='bg-white border round p-5' >
                            <Form.Label className='xxl bgcolor'>Hi, Welcome 👋</Form.Label>
                            <Form.Group className="mb-3 bgcolor" controlId="formBasicName">
                                <Form.Label className='bgcolor'>First Name</Form.Label>
                                <Form.Control type="name" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 bgcolor" controlId="formBasicName">
                                <Form.Label className='bgcolor'>Last Name</Form.Label>
                                <Form.Control type="name" placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 bgcolor" controlId="formBasicEmail">
                                <Form.Label className='bgcolor'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted bgcolor">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 bgcolor" controlId="formBasicPassword">
                                <Form.Label className='bgcolor'>Password</Form.Label>
                                <Form.Control type="password" placeholder="******" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                    <Col className='text-center'>
                        <h1 className='text-center text-white'>New Here?</h1>
                        <h2 className='text-center text-white mb-5'>Sign up and discover a grate things.</h2>
                        <Image src={ImageDoctor} alt="Image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 