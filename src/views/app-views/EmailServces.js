import React, { useState } from 'react';
import { Form, Input, Button, message, Alert, Row, Col } from 'antd';
import axios from 'axios';
import { variables } from '../../Varaiable';
import { useNavigate } from 'react-router-dom';

const EmailServices = ({ onNext }) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [isSuccess, setIsSuccess] = useState(false);

    const onFinish = async (values) => {
        try {
            debugger;
            const response = await axios.post(`${variables.API_URL}email/sendemail?email=${values.toEmail}`);
            console.log(response.data);
            message.success('OTP Email sent successfully!');
            setIsSuccess(true);
            form.resetFields();
            sessionStorage.setItem("SessionOTP", response.data.contents[0].value);
            var item_value = sessionStorage.getItem("SessionOTP");
            setTimeout(() => setIsSuccess(false), 5000);
            onNext(); 
        } catch (error) {
            console.error('Error sending email:', error);
            message.error('Failed to send email.');
            message.error('Email Not exit in Register table.');
            setIsSuccess(false);
        }
    };

    return (
        <div style={{ width: '400px', margin: 'auto', padding: '20px' }}>
            {isSuccess && (
                <div style={{ marginBottom: '5px', marginTop: '50px' }}>
                    <Alert message="Email sent successfully! with OTP" type="success" showIcon />
                </div>
            )}
            <h2 style={{ textAlign: 'center', marginTop: '5px', marginBottom: '50px' }}>Confirmation Email</h2>

            <Row>
                <Col span={24}>
                    <Form
                        form={form}
                        name="email-form"
                        onFinish={onFinish}
                        initialValues={{ toEmail: '', toName: '', subject: '', message: '' }}
                        style={{ maxWidth: '400px', margin: 'auto' }}
                        labelCol={{ span: 9 }}
                        wrapperCol={{ span: 15 }}
                    >
                        <Form.Item name="toEmail" label="Email" style={{width:"100%", marginLeft:"-50px"}} rules={[{ required: true, message: 'Please enter recipient email!' }]}>
                            <Input />
                        </Form.Item>
                        {/* <Form.Item name="toName" label="Recipient Name" rules={[{ required: true, message: 'Please enter recipient name!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="subject" label="Subject" rules={[{ required: true, message: 'Please enter subject!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="message" label="Message" rules={[{ required: true, message: 'Please enter message!' }]}>
                            <Input.TextArea style={{ height: '150px' }} />
                        </Form.Item> */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%', marginLeft: '100px', marginTop:'50px' }}>Send Email</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default EmailServices;
