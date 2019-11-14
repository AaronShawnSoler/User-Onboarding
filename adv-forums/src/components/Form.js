import React from 'react';
import { Formik, Form, Field } from 'formik';


function FormContainer() {
    return(
        <Formik 
        initialValues={{
            name: '',
            email: '',
            password: '',
            terms: false
        }}
        onSubmit={(values, tools) => {
            console.log(values, tools);
            tools.resetForm();
        }}
        render={props => {
            return(
                <Form>
                    <Field type='text' name='name' placeholder='enter name'/>
                    <Field type='text' name='email' placeholder='enter email'/>
                    <Field type='text' name='password' placeholder='enter password'/>
                    Accept terms of service: <Field type='checkbox' name='terms' />
                    <input type='submit' />
                </Form>
            );
        }}
        />
    );
}

export default FormContainer;