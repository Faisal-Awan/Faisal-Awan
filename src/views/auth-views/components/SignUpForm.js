// SignUpForm.js
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, message, Select } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined  } from '@ant-design/icons';
import { variables } from '../../../Varaiable';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;

const SignUpForm = ({ onNext }) => {

    const navigate = useNavigate();
    const onFinish = async (values) => {
        values.id= 0;
        console.log('Received values:', values);
        try {
            // debugger;
            // Make an API call to register the user
            const response = await axios.post(`${variables.API_URL}User/Register`, values);

            if (response.status === 201) {
                // Registration successful
                message.success('Registration successful!');
                // navigate('/emailServices');
                onNext(); 

            } else {
                // Handle other status codes if needed
                message.error('Registration failed.');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // Handle validation errors
                const { errors } = error.response.data;

                // Display a message for each validation error
                Object.keys(errors).forEach((key) => {
                    const errorMessage = errors[key].join(' ');
                    message.error(`${key}: ${errorMessage}`);
                });
            } else {
                console.error('Registration failed:', error.response?.data || error.message);
                message.error('Registration failed. Please try again.');
            }
        }
    };

    const validateConfirmPassword = (_, value, callback) => {
        const { password } = form.getFieldsValue();
        if (value && value !== password) {
            callback('Passwords do not match!');
        } else {
            callback();
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // const validateConfirmPassword = (_, value, callback) => {
    //     const { password } = form.getFieldsValue();
    //     if (value && value !== password) {
    //         callback('Passwords do not match!');
    //     } else {
    //         callback();
    //     }
    // };

    const [form] = Form.useForm();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Row>
                <Col span={24}>
                    <Form
                        form={form}
                        name="signup"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        labelAlign="left"
                        className="SignUp-form"
                        initialValues={{ remember: true }}
                        labelCol={{ span: 9 }}
                        wrapperCol={{ span: 15 }}
                    >

                        <Form.Item
                            label="First Name"
                            name="firstName"
                            rules={[{ required: true, message: 'Please input your first name!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="First Name" />
                        </Form.Item>

                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[{ required: true, message: 'Please input your last name!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Last Name" />
                        </Form.Item>

                        <Form.Item
                            label="E-mail"
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Invalid email address' },
                            ]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            label="Phone Number"
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
                        </Form.Item>

                        <Form.Item
          
                            name="userType"
                            label="User Type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Type!',
                                },
                            ]}
                        >
                            <Select prefix={<UserOutlined />} placeholder="select your Type" >
                                
                                <Option value="student">Student</Option>
                                <Option value="admin">Admin</Option>
                                <Option value="acountant">Accountant</Option>
                                <Option value="teacher">Teacher</Option>
                            </Select>
                        </Form.Item>
                       

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>

                        <Form.Item
                            label="Confirm Password"
                            name="confirmPassword"
                            dependencies={['password']}
                            rules={[
                                { required: true, message: 'Please confirm your password!' },
                                { validator: validateConfirmPassword },
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
                        </Form.Item>

                        <br />
                        <Form.Item style={{ justifyContent: 'center' , alignItems: 'center', width: '100%', marginLeft:"80px"}}>
                            <Button className='login-form-button' type="primary" htmlType="submit" >
                                Sign Up
                            </Button>
                            {/* {showComponent && <LoginForm />} */}
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default SignUpForm;












{/* <div>
<Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
    <Col span={8}>
        <Form onFinish={formik.handleSubmit}>
            <Form.Item
                name="fullName"
                validateStatus={formik.errors.fullName ? 'error' : ''}
                help={formik.errors.fullName}
                rules={[{ required: true, message: 'Please enter your Full Name' }]}
            >
                <Input
                    prefix={<UserOutlined />}
                    placeholder="Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                />
            </Form.Item>

            <Form.Item
                name="email"
                validateStatus={formik.errors.email ? 'error' : ''}
                help={formik.errors.email}
                rules={[
                    { required: true, message: 'Please enter your Email' },
                    { type: 'email', message: 'Invalid email format' },
                ]}
            >
                <Input
                    prefix={<MailOutlined />}
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
            </Form.Item>

            <Form.Item
                name="password"
                validateStatus={formik.errors.password ? 'error' : ''}
                help={formik.errors.password}
                rules={[{ required: true, message: 'Please enter your Password' }]}
            >
                <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Sign Up
                </Button>
            </Form.Item>
        </Form>
    </Col>
</Row>
</div> */}