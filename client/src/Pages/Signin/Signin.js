import React, { useState } from 'react';
import './Signin.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import ImageDoctor from '../../Source/Image/doctor.png';

import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Signin() {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

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
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Form className='bg-white border p-5' onSubmit={handleFormSubmit}>
                        <Form.Label className='xxl bgcolor'>Hi, Welcome back 👋</Form.Label>
                        <Form.Group className="mb-3 bgcolor" controlId="formBasicEmail">
                            <Form.Label className='bgcolor'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={formState.email} onChange={handleChange}/>
                            <Form.Text className="text-muted bgcolor">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 bgcolor" controlId="formBasicPassword">
                            <Form.Label className='bgcolor'>Password</Form.Label>
                            <Form.Control type="password" placeholder="******" value={formState.password} onChange={handleChange}/>
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