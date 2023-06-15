import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';
const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
});


export default function Validate() {
    const initialValues = {
        name: '',
        email: ''
    };

    const handleSubmit = (values) => {
        // Handle form submission
        console.log(values);
      };
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <TextField
                            name="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                        />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div>
                        <TextField
                            name="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                        />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Form>
            </Formik> <div>validation</div>
        </>
    )
}
