import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';


const { Title } = Typography;

const ResetPassword = () => {

    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showNewPasswordFields, setShowNewPasswordFields] = useState(false);

    const [isSuccess, setIsSuccess] = useState(false);


    const navigate = useNavigate();

    const handleSubmit = (values) => {

        try {   
            debugger
            var item_value = sessionStorage.getItem("SessionOTP");
            if (values.otp == item_value) {
                setTimeout(() => setIsSuccess(false), 5000);
                // navigate('/login');
                setShowNewPasswordFields(true);

            }
            else if (values.message != item_value) {
                message.error('Failed to verify');
            }
        } catch (error) {
            console.error('Error sending massage:', error);
            message.error('Failed to send message');
        }
        // Logic to check OTP and handle password reset
        // if (otp === 'valid_otp') {
        //     setShowNewPasswordFields(true);
        // } else {
        //     setError('Invalid OTP');
        // }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'newPassword') setNewPassword(value);
        if (name === 'confirmPassword') setConfirmPassword(value);
    };

    const handleResetPassword = (values) => {
        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            return;
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Title>Reset Password</Title>
            {!showNewPasswordFields ? (
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Enter OTP"
                        name="otp"
                        rules={[{ required: true, message: 'Please enter OTP' }]}
                    >
                        <Input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit OTP
                        </Button>
                    </Form.Item>
                    {error && <Typography.Text type="danger">{error}</Typography.Text>}
                </Form>
            ) : (
                <Form layout="vertical" onFinish={handleResetPassword}>
                    <Form.Item
                        label="New Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter new password' }]}
                    >
                        <Input.Password
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Confirm New Password"
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please confirm new password' }]}
                    >
                        <Input.Password
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Reset Password
                        </Button>
                    </Form.Item>
                    {error && <Typography.Text type="danger">{error}</Typography.Text>}
                </Form>
            )}
        </div>
    );
};

export default ResetPassword;
