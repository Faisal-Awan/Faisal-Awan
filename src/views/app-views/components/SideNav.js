/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme, Button, Popover } from 'antd';
import { PiStudent } from 'react-icons/pi';
import { RiAccountCircleFill } from 'react-icons/ri';
import { RiPresentationLine } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import RegisterForm from '../../auth-views/components/RegisterForm';
import AccountBook from '../../app-views/components/AccountBook';
import AdminAction from '../../auth-views/components/TableRegistration';
import UpdateRegisterForm from '../../auth-views/components/UpdateRegistration';

const StudentRegistration = () => <div><RegisterForm /></div>;
const AccountBookComponent = () => <div><AccountBook /></div>;
const PendingFee = () => <div>Pending Fee Component</div>;
const FeeChalan = () => <div>Fee Chalan Component</div>;
const AddStudent = () => <div><RegisterForm /></div>;
const EditStudent = () => <div><AdminAction /></div>;
const UploadCourse = () => <div>Upload Course Component</div>;
const UploadAssessment = () => <div><UpdateRegisterForm /></div>;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function getItemComponent(key) {
  switch (key) {
    case '1':
      return <StudentRegistration />;
    case '2':
      return <AccountBookComponent />;
    case '5':
      return <PendingFee />;
    case '6':
      return <FeeChalan />;
    case '7':
      return <AddStudent />;
    case '8':
      return <EditStudent />;
    case '9':
      return <UploadCourse />;
    case '10':
      return <UploadAssessment />;
    default:
      return null;
  }
}

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  debugger
   const [open, setOpen] = useState(false);

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const userType = JSON.parse(sessionStorage.getItem('userData')).userType;

    const hide = () => {
       setOpen(false);
     };
     const handleOpenChange = (newOpen) => {
       setOpen(newOpen);
     };


  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };

  const getMenuItems = () => {
    switch (userType) {
      case 'admin':
        return [
          getItem('Student', 'sub1', <PiStudent />, [
            getItem('Student Registration', '1'),
            getItem('Account Book', '2'),
          ]),
          getItem('Accountant', 'sub2', <RiAccountCircleFill />, [
            getItem('Pending fee', '5'),
            getItem('Fee chalaln', '6'),
          ]),
          getItem('Admin', 'sub3', <MdOutlineAdminPanelSettings />, [
            getItem('Add student', '7'),
            getItem('Edit Student', '8'),
          ]),
          getItem('Faculty', 'sub4', <GiTeacher />, [
            getItem('Upload Course', '9'),
            getItem('Upload Assessment', '10'),
          ]),
        ];
      case 'student':
        return [
          getItem('Student', 'sub1', <PiStudent />, [
            getItem('Student Registration', '1'),
            getItem('Account Book', '2'),
          ]),
        ];
      case 'accountant':
        return [
          getItem('Accountant', 'sub2', <RiAccountCircleFill />, [
            getItem('Pending fee', '5'),
            getItem('Fee chalaln', '6'),
          ]),
        ];
      case 'faculty':
        return [
          getItem('Faculty', 'sub4', <GiTeacher />, [
            getItem('Upload Course', '9'),
            getItem('Upload Assessment', '10'),
          ]),
        ];
      default:
        return [];
    }
  };

  const items = getMenuItems();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: 'white', margin: '10px 0px 10px 0px' }}>
          <RiPresentationLine style={{ width: '35px', height: '35px', marginRight: '10px' }} />
        </div>
        <Menu theme="dark" onClick={({ key }) => handleMenuClick(key)} selectedKeys={[selectedKey]} mode="inline">
          {items.map((item) => (
            <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
              {item.children.map((child) => (
                <Menu.Item key={child.key}>
                  {child.label}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: theme.useToken().colorBgContainer, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
            <RiPresentationLine style={{ width: '35px', height: '35px', marginRight: '10px', color: 'white' }} />
            <span style={{ color: 'white' }}>Online Registration System</span>
          </div>

        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ position: 'relative' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Registration</Breadcrumb.Item>
            </Breadcrumb>

                      <div
                        style={{
                          position: 'absolute',
                           top: '50%',
                           right: 0,
                           transform: 'translateY(-50%)',
                         }}
                       >
                        <Popover
                          content={
                             <div>
                               <p>
                                 <Link to="/profile">Profile</Link>
                               </p>
                               <p>
                                 <Link to="/logout">Logout</Link>
                               </p>
                               <p>
                                 <Link to="/changePassword">ChangePassword</Link>
                               </p>
                             </div>
                           }
                           // title="Options"
                           trigger="click"
                           open={open}
                           onOpenChange={handleOpenChange}
                         >
                           <Button type="primary" style={{ borderRadius: '50%' }}>
                             C
                           </Button>
                         </Popover>
                       </div>
          
          </div>
          <div style={{ padding: 24, minHeight: 360, background: theme.useToken().colorBgContainer, borderRadius: theme.useToken().borderRadiusLG }}>
            {getItemComponent(selectedKey)}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Student Registration ©{new Date().getFullYear()} Created by Me!
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;







// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Breadcrumb, Layout, Menu, theme, Button, Popover } from 'antd';
// import { PiStudent } from 'react-icons/pi';
// import { RiAccountCircleFill } from 'react-icons/ri';
// import { RiPresentationLine } from "react-icons/ri";
// import { MdOutlineAdminPanelSettings } from 'react-icons/md';
// import { GiTeacher } from 'react-icons/gi';
// import RegisterForm from '../../auth-views/components/RegisterForm';
// import GradeBook from '../../app-views/components/GradeBook';
// import AccountBook from '../../app-views/components/AccountBook';
// import AdminAction from '../../auth-views/components/TableRegistration';
// import { StarOutlined } from '@ant-design/icons';
// import UpdateRegisterForm from '../../auth-views/components/UpdateRegistration';

// const StudentRegistration = () => <div><RegisterForm /></div>;
// const AcountBook = () => <div><AccountBook /></div>;
// // const StudentRegistration = () => <div><RegisterForm /></div>;
// const PendingFee = () => <div>Pending Fee Component</div>;
// const FeeChalan = () => <div>Fee Chalan Component</div>;
// const AddStudent = () => <div><RegisterForm /></div>;
// const EditStudent = () => <div><AdminAction /></div>;
// const UploadCourse = () => <div>Upload Course Component</div>;
// const UploadAssessment = () => <div><UpdateRegisterForm /></div>;

// function getItemComponent(key) {
//   switch (key) {
//     case '1':
//       return <StudentRegistration />;
//     case '2':
//       return <AcountBook />;
//     case '5':
//       return <PendingFee />;
//     case '6':
//       return <FeeChalan />;
//     case '7':
//       return <AddStudent />;
//     case '8':
//       return <EditStudent />;
//     case '9':
//       return <UploadCourse />;
//     case '10':
//       return <UploadAssessment />;
//     default:
//       return null;
//   }
// }
// const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }

// const items = [
//   getItem('Student ', 'sub1', <PiStudent />, [
//     getItem('Student Registration', '1'),
//     getItem('Account Book', '2'),
//     // getItem('Student Registration', '4'),
//   ]),
//   getItem(' Accountant', 'sub2', <RiAccountCircleFill />, [
//     getItem('Pending fee', '5'),
//     getItem('Fee chalaln', '6'),
//   ]),
//   getItem(' Admin', 'sub3', <MdOutlineAdminPanelSettings />, [
//     getItem('Add student', '7'),
//     getItem('Edit Student', '8'),
//   ]),
//   getItem(' Faculty', 'sub4', <GiTeacher />, [
//     getItem('Upload Course', '9'),
//     getItem('Upload Assessment', '10'),
//   ]),
// ];



// const App = () => {
//   const [open, setOpen] = useState(false);
//   const hide = () => {
//     setOpen(false);
//   };
//   const handleOpenChange = (newOpen) => {
//     setOpen(newOpen);
//   };
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const [selectedKey, setSelectedKey] = useState('1');

//   const handleClick = (e) => {
//     setSelectedKey(e.key);
//   };

//   return (
//     // <div className="app-container" style={{display: 'flex'}}>
//     //   <div className="sidenav" style={{width: '200px'}}>
//     //     <Menu onClick={handleClick} selectedKeys={[selectedKey]} mode="inline">
//     //       {items.map((item) => (
//     //         <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
//     //           {item.children.map((child) => (
//     //             <Menu.Item key={child.key}>
//     //               {child.label}
//     //             </Menu.Item>
//     //           ))}
//     //         </Menu.SubMenu>
//     //       ))}
//     //     </Menu>
//     //   </div>
//     //   <hr />
//     //   <div  style={{flexGrow: '1', padding: '15px'}}>
//     //     {/* Render the corresponding component based on the selected key */}
//     //     {getItemComponent(selectedKey)}
//     //   </div>
//     // </div>

//     <Layout
//       style={{
//         minHeight: '100vh',
//       }}
//     >
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: 'white', margin: '10px 0px 10px 0px' }}>
//           <RiPresentationLine style={{ width: '35px', height: '35px', marginRight: '10px' }} />
//           {/* <span>ORS</span> */}
//         </div>
//         {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
//         <Menu theme="dark" onClick={handleClick} selectedKeys={[selectedKey]} mode="inline" items={items}>
//           {items.map((item) => (
//             <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
//               {item.children.map((child) => (
//                 <Menu.Item key={child.key}>
//                   {child.label}
//                 </Menu.Item>
//               ))}
//             </Menu.SubMenu>
//           ))}
//         </Menu>
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px', fontWeight: 'bold' }}>
//             <RiPresentationLine style={{ width: '35px', height: '35px', marginRight: '10px' }} />
//             <span>Online Registration System</span>
//           </div>

//         </Header>
//         <Content
//           style={{
//             margin: '0 16px',
//           }}
//         >
//           <div style={{ position: 'relative' }}>
//             <Breadcrumb style={{ margin: '16px 0' }}>
//               <Breadcrumb.Item>User</Breadcrumb.Item>
//               <Breadcrumb.Item>Registration</Breadcrumb.Item>
//             </Breadcrumb>
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 right: 0,
//                 transform: 'translateY(-50%)',
//               }}
//             >
//               <Popover
//                 content={
//                   <div>
//                     <p>
//                       <Link to="/profile">Profile</Link>
//                     </p>
//                     <p>
//                       <Link to="/logout">Logout</Link>
//                     </p>
//                     <p>
//                       <Link to="/changePassword">ChangePassword</Link>
//                     </p>
//                   </div>
//                 }
//                 // title="Options"
//                 trigger="click"
//                 open={open}
//                 onOpenChange={handleOpenChange}
//               >
//                 <Button type="primary" style={{ borderRadius: '50%' }}>
//                   C
//                 </Button>
//               </Popover>
//             </div>
//           </div>


//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//               borderRadius: borderRadiusLG,
//             }}
//           >
//             {getItemComponent(selectedKey)}

//           </div>
//         </Content>

//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Student Registration ©{new Date().getFullYear()} Created by Me!
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default App;




