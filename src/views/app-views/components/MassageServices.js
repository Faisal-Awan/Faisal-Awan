import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { variables } from '../../../Varaiable';
import { useNavigate } from 'react-router-dom';


const MassageServices = () => {
    const navigate = useNavigate();

    const [isSuccess, setIsSuccess] = useState(false);

    const onFinish = async (values) => {
        try {
            // const response = await axios.post(`${variables.API_URL}massage`, values);
            // console.log(response.data);
            // setIsSuccess(true);
            // message.success('Message sent successfully!', 5);
            debugger
            var item_value = sessionStorage.getItem("SessionOTP");
            if (values.message == item_value) {
                setTimeout(() => setIsSuccess(false), 5000);
                navigate('/login');
            }
            else if (values.message != item_value) {
                message.error('Failed to verify');
            }
        } catch (error) {
            console.error('Error sending massage:', error);
            message.error('Failed to send message');
        }
    };

    return (
        <div style={{ width: '300px', margin: 'auto' }}>
            {isSuccess && (
                <div style={{ marginTop: '10px', color: 'green', marginTop: '110px' }}>Massage sent successfully!</div>
            )}
            <Form
                name="massageForm"
                onFinish={onFinish}
            >
                {/* <Form.Item
                    name="toPhoneNumber"
                    rules={[{ required: true, message: 'Please enter recipient phone number' }]}
                    style={{ marginTop: '50px' }}
                >
                    <Input placeholder="Recipient Phone Number" />
                </Form.Item> */}

                <Form.Item
                    name="message"
                    rules={[{ required: true, message: 'Please enter your message' }]}
                >
                    <Input.TextArea placeholder="Message" />
                </Form.Item>

                <Form.Item style={{ marginLeft: '80PX' }}>
                    <Button type="primary" htmlType="submit">
                        Verify OTP
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
}

export default MassageServices;
