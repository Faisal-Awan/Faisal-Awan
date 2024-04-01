import React from 'react';
import { Avatar, Typography, Descriptions } from 'antd';

const { Title } = Typography;
const ProfilePage = () => {
    const userData = JSON.parse(sessionStorage.getItem('userData')); // Retrieve user data from sessionStorage
    console.log(userData);
    return (
        <>




            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh' }}>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <Title level={2}>My Profile</Title>
                    <Avatar size={100} src={userData.avatar} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <Descriptions title="User Info" layout="vertical" bordered>
                        <Descriptions.Item label="Full Name">{userData.firstName}</Descriptions.Item>
                        <Descriptions.Item label="Email">{userData.email}</Descriptions.Item>
                        <Descriptions.Item label="Phone">{userData.phoneNumber}</Descriptions.Item>
                        <Descriptions.Item label="User Type">{userData.userType}</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>



        </>

    );
};

export default ProfilePage;








// import React, { useState, useEffect } from 'react';
// import { Avatar, Typography, Descriptions } from 'antd';
// import axios from 'axios';
// import { variables } from '../../../../Varaiable';

// const { Title } = Typography;

// const ProfilePage = () => {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         debugger
//         // Fetch user data from API
//         const fetchUserData = async () => {
//             try {
//                 const response = await axios.get(`${variables.API_URL}User`);
//                 setUserData(response.data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchUserData();
//     }, []);

//     return (
//         <div style={{ padding: '20px' }}>
//             <Title level={2}>My Profile</Title>
//             {userData && (
//                 <>
//                     <Avatar size={100} src={userData.avatar} />
//                     <Descriptions title="User Info" layout="vertical" bordered>
//                         {/* <Descriptions.Item label="ID">{userId}</Descriptions.Item> */}
//                         <Descriptions.Item label="Full Name">{userData.firstName}</Descriptions.Item>
//                         <Descriptions.Item label="Email">{userData.email}</Descriptions.Item>
//                         <Descriptions.Item label="Phone">{userData.phoneNumber}</Descriptions.Item>
//                         {/* Add more user details here */}
//                     </Descriptions>
//                 </>
//             )}
//         </div>
//     );
// };

// export default ProfilePage;
