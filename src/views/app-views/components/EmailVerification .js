import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { variables } from '../../../Varaiable';

const EmailVerification = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        try {
            setLoading(true);
            const response = await axios.post(`${variables.API_URL}email/verify`, values);
            message.success(response.data);
        } catch (error) {
            message.error('Failed to verify email. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ width: '400px', margin: 'auto' }}>
            <h2>Email Verification</h2>
            <Form
                name="emailVerification"
                onFinish={onFinish}
                initialValues={{ email: '', verificationCode: '' }}
                layout="vertical"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please enter your email' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Verification Code"
                    name="verificationCode"
                    rules={[{ required: true, message: 'Please enter the verification code' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Verify
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EmailVerification;
