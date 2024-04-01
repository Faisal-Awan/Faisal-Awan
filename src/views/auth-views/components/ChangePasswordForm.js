import React, { useState } from 'react';
import { variables } from '../../../Varaiable';
import { Form, Input, Button, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const ChangePassword = () => {
    const navigate = useNavigate();

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'oldPassword') setOldPassword(value);
        if (name === 'newPassword') setNewPassword(value);
        if (name === 'confirmPassword') setConfirmPassword(value);
    };

    const handleSubmit = async () => {
        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            return;
        }

        try {
            const userId = userData.id;
            if (!userId) {
                setError('User ID is undefined.');
                return;
            }

            const response = await fetch(`/${variables.API_URL}user/ChangePassward`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    oldPassword,
                    newPassword,
                }),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                setError(errorMessage);
                return;
            }

            message.success('Password changed successfully!');
            navigate('/sidenav');
        } catch (error) {
            console.error('Error changing password:', error);
            setError('Failed to change password. Please try again later.');
        }
    };

    return (
        <div style={{ width: '30%', margin: '0 auto', padding: '20px' }}>
            <Title style={{ textAlign: 'center', margin:'50px 0px 30px 0px' }} level={2}>
                Change Password
            </Title>
            <Form layout="vertical" onFinish={handleSubmit}>
                <Form.Item label="Old Password" name="oldPassword" rules={[{ required: true, message: 'Please input your old password!' }]}>
                    <Input.Password name="oldPassword" value={oldPassword} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="New Password" name="newPassword" rules={[{ required: true, message: 'Please input your new password!' }]}>
                    <Input.Password name="newPassword" value={newPassword} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Confirm Password" name="confirmPassword" rules={[{ required: true, message: 'Please confirm your new password!' }]}>
                    <Input.Password name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Change Password
                    </Button>
                </Form.Item>
                {error && <Typography.Text type="danger">{error}</Typography.Text>}
            </Form>
        </div>
    );
};

export default ChangePassword;















// import React, { useState } from 'react';
// import axios from 'axios';
// import { variables } from '../../../Varaiable';

// const ChangePasswordForm = () => {
//     const [oldPassword, setOldPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleChangePassword = async () => {
//         debugger
//         try {
//             const response = await axios.post(`${variables.API_URL}user/changePassward`, {
//                 oldPassword,
//                 newPassword,
//                 confirmPassword,
//             });
//             console.log('Password changed successfully');
//             setErrorMessage('');
//         } catch (error) {
//             console.error('Failed to change password:', error);
//             setErrorMessage('Failed to change password. Please try again.');
//         }
//     };

//     return (
//         <div style={{ maxWidth: '300px', margin: 'auto', marginTop: '180px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
//             <input
//                 type="password"
//                 placeholder="Old Password"
//                 value={oldPassword}
//                 onChange={(e) => setOldPassword(e.target.value)}
//                 style={{ width: '100%', marginBottom: '10px', padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
//             />
//             <input
//                 type="password"
//                 placeholder="New Password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 style={{ width: '100%', marginBottom: '10px', padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
//             />
//             <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 style={{ width: '100%', marginBottom: '10px', padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
//             />
//             <button
//                 onClick={handleChangePassword}
//                 style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
//             >
//                 Change Password
//             </button>
//             {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
//         </div>
//     );
// };

// export default ChangePasswordForm;






// import React, { useState } from 'react';
// import axios from 'axios';
// import { variables } from '../../../Varaiable';

// const ChangePasswordForm = () => {
//     const [oldPassword, setOldPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const handleChangePassword = async () => {
//         try {
//             const response = await axios.post(`${variables.API_URL}User/ChangePassword`, {
//                 oldPassword,
//                 newPassword,
//                 confirmPassword,
//             });
//             console.log('Password changed successfully');
//         } catch (error) {
//             console.error('Failed to change password:', error);
//         }
//     };

//     return (
//         <div>
//             <input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
//             <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
//             <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//             <button onClick={handleChangePassword}>Change Password</button>
//         </div>
//     );
// };

// export default ChangePasswordForm;
