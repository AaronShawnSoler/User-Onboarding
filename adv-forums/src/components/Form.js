import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Users from './Users';

const Schema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please enter your name.'),
    email: Yup.string()
        .email('Invalid email')
        .required('Please enter your email.'),
    password: Yup.string()
        .min(8, 'Password too short!')
        .max(32, 'Password too long!')
        .required('Please enter your password'),
    terms: Yup.bool()
        .oneOf([true], 'Must Accept Terms and Conditions')
})

function FormContainer() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

    },[users]);

    return(
        <>
            <Formik 
            initialValues={{
                name: '',
                email: '',
                password: '',
                terms: false
            }}
            validationSchema={Schema}
            onSubmit={(values, tools) => {
                console.log(values);
                axios.post('https://reqres.in/api/users', values)
                .then(res => {
                    tools.resetForm();
                    console.log(res.data);
                    setUsers([
                        ...users,
                        res.data
                    ]);
                });
            }}
            >
            {({errors, touched, isSubmitting}) => 
                <Form>
                    <Field type='text' name='name' placeholder='enter name'/>
                    {errors.name && touched.name ? <div style={{color: 'red'}}>{errors.name}</div> : null}
                    <Field type='text' name='email' placeholder='enter email'/>
                    {errors.email && touched.email ? <div style={{color: 'red'}}>{errors.email}</div> : null}
                    <Field type='password' name='password' placeholder='enter password'/>
                    {errors.password && touched.password ? <div style={{color: 'red'}}>{errors.password}</div> : null}
                    Accept terms of service: <Field type='checkbox' name='terms' />
                    {errors.terms && touched.terms ? <div style={{color: 'red'}}>{errors.terms}</div> : null}
                    <button type='submit' disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </Form>
            }
            </Formik>
            <Users data={users}/>
        </>
    );
}

export default FormContainer;