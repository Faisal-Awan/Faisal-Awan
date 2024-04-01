import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from '../views/auth-views/components/LoginForm';
import SignUpForm from '../views/auth-views/components/SignUpForm';
import SideNav from '../views/app-views/components/SideNav';
import AccountBook from '../views/app-views/components/AccountBook';
import Logout from '../views/auth-views/components/Logout';
import UpdateRegisterForm from '../views/auth-views/components/UpdateRegistration';
import ChangePasswordForm from '../views/auth-views/components/ChangePasswordForm';
import ForgotPasswordPage from '../views/auth-views/components/ForgotPasswordPage';
import ResetPasswordPage from '../views/auth-views/components/ResetPasswordPage';
import ProfilePage from '../views/app-views/components/other/Profile';
import StudentRegistrationList from '../views/auth-views/components/TableRegistration';
import HomePage from '../views/app-views/components/HomePage';
import EmailServces from '../views/app-views/EmailServces';
import MassageServices from '../views/app-views/components/MassageServices';
import EmailVerification from '../views/app-views/components/EmailVerification ';
import Login2 from '../views/auth-views/components/Login2';
import EmailServices from '../views/app-views/EmailServces';
import ImageUpload from '../views/auth-views/components/ImageUpload';


const Routing = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/login2" element={<Login2/>} />
            <Route path="/signUp" element={<SignUpForm />} />
            <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
            <Route path="/resetPassword" element={<ResetPasswordPage />} />
            <Route path="/Sidenav" element={<SideNav />} />
            <Route path="/accountBook" element={<AccountBook />} />
            <Route path="/login " element={<Navigate to="/login" />} />
            <Route path="/login2 " element={<Navigate to="/login2" />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/changePassword" element={<ChangePasswordForm />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/update_student/:id" element={<UpdateRegisterForm />} />
            <Route path="/list_student" element={<StudentRegistrationList />} />
            <Route path="/email" element={<EmailServces />} />
            <Route path="/massageServixes" element={<MassageServices />} />
            <Route path="/emailServices" element={<EmailServices />} />



            <Route path="/emailverification" element={<EmailVerification/>} />
            <Route path="/imageUpload" element={<ImageUpload />} />

        </Routes>
    );
};

export default Routing;








// <Router>
//     <switch>
//         <Route path="/" exact component={<LoginForm />} />
//         <Route path="/registration" component={<RegisterForm />} />
//         {/* <Route component={NotFound} /> */}
//     </switch>
// </Router>