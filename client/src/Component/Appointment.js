import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import {useMutation} from '@apollo/client';
import {ADD_PATIENT} from '../../utils/mutations';

import Auth from '../../utils/auth';

const Appointment = () => {

    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', phone: '', appointment: '' });
    
    const [validated] = useState(false);

    const [addPatient, { error }] = useMutation(ADD_PATIENT);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...userFormData, [name]: value });
      };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addPatient({
                variables: { ...formData }
            });
            Auth.login(data.addPatient.token);
        } catch (e) {
            console.error(e);
        }

    };
    
    return (
    
    <Form noValidate validated ={validated} onSubmit={handleFormSubmit}>
        <Form.Group>
            <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    />
        </Form.Group>
        <Form.Group>
            <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                />
        </Form.Group>
        <Form.Group>
            <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    />
        </Form.Group>
        <Form.Group>
            <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    required
                    />
        </Form.Group>
        <Form.Group>
            <Form.Label>Appointment Date</Form.Label>
                <Form.Control
                    type="date"
                    name="appointment"
                    value={formData.appointment}
                    onChange={handleInputChange}
                    placeholder="Appointment Date"
                    required
                    />
        </Form.Group>
            <Button 
                disabled={!(formData.firstname && formData.lastname && formData.email && formData.phone && formData.appointment)}
                type="submit" 
                variant="primary">
                    Submit
            </Button>
    </Form>

    );
}

export default Appointment