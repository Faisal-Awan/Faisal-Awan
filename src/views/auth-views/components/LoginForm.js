/* eslint-disable no-unused-vars */

import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { PiStudentDuotone } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import jwt_decode from 'jwt-decode';
import { login } from '../components/store/feature/Auth';
import { useDispatch } from 'react-redux';
import { variables } from '../../../Varaiable';
import ProfilePage from '../../app-views/components/other/Profile';


const LoginForm = () => {

	// const [ setUserDataL ] = useContext();



	const [login, setLogin] = useState(false);
	const [userId, setUserId] = useState(null);
	const [userData, setUserData] = useState({});
	const [data, setData] = useState({});
	const [picture, setPicture] = useState('');

	const navigate = useNavigate();

	const [form] = Form.useForm();

	const responseFacebook = (response) => {
debugger
		if (response) {
			console.log(response);
			setData(response);
			if (response.picture && response.picture.data && response.picture.data.url) {
				setPicture(response.picture.data.url);
			}
			if (response.accessToken) {
				const accessToken = response.accessToken;
				// Do something with the access token, such as storing it in state or sending it to your server.
				console.log("Access token:", accessToken);
				setLogin(true);
				message.success(`Login successful with your Facebook account: ${response.email}`);


				// Redirect to '/sidenav' after successful login
				navigate('/sidenav');
			} else {
				setLogin(false);
			}
		} else {
			console.error("Empty response received from Facebook.");
			// Handle the error, such as displaying a message to the user or retrying the login process.
		}
	}

	const handleGoogleSignInSuccess = (response) => {
		debugger
		if (response && response.credential) {
			const idTokenPayload = parseJwt(response.credential);
			if (idTokenPayload && idTokenPayload.email) {
				console.log('Google sign-in successful:', response);
				message.success(`Login successful with your Google account: ${idTokenPayload.email}`);
				navigate('/sidenav');
			} else {
				console.error('Failed to retrieve email from Google sign-in response:', response);
				message.error('Failed to retrieve email from Google sign-in response. Please try again or use a different method to log in.');
			}
		} else {
			console.error('Google sign-in response does not contain credential:', response);
			message.error('Failed to retrieve credential from Google sign-in response. Please try again or use a different method to log in.');
		}
	};
	const parseJwt = (token) => {
		try {
			const base64Url = token.split('.')[1];
			const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
			const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
			return JSON.parse(jsonPayload);
		} catch (error) {
			console.error('Error parsing JWT token:', error);
			return null;
		}
	};
	const handleGoogleSignInFailure = (error) => {
		console.error('Google sign-in failed:', error);
	};


	// const navigateToProfile = (userData) => {
	// 	navigate('/profile', { state: { userData } });
	// };
	const onFinish = async (values) => {	
		debugger
		try {

			const response = await axios.post(`${variables.API_URL}Login/Login`, values);
			console.log("ahdhkfhkajdhfka", response.status)
			if (response.status === 200) {

				const userData = response.data;
				// setUserData(userData); 
				// setUserId(userData.id); 
				const userId = userData.id; 
				sessionStorage.setItem('userData', JSON.stringify(userData)); 
			
				message.success('Login successful!');
				navigate('/sidenav');
			} else {
				message.error('User does not exist.');
			}
		} catch (error) {
			console.error('Login failed:', error.response?.data || error.message);
			message.error('User not Exist.');
		}
	};

	return (
		<>
			<div className="login-container">
				<Form
					form={form}
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
				>
					<Form.Item>
						<PiStudentDuotone className="icon" style={{ fontSize: '48px' }} />
					</Form.Item>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: 'Please input your Username!',
							},
						]}
					>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your Password!',
							},
						]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
						<Link className="login-form-forgot" to="/forgotPassword">
							Forgot password ?
						</Link>
					</Form.Item>
					<Form.Item>
						<Button className="login-form-button" type="primary" htmlType="submit">
							Log in
						</Button>
					</Form.Item>
					<Form.Item>
						Don't have an account yet? {' '}
						<Link to="/login2">Sign Up</Link>
					</Form.Item>
					<Form.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

						<GoogleLogin
							clientId="26121329412-p55g1a7o7su76bdhu29a8uq7a0fgminh.apps.googleusercontent.com"
							buttonText="Sign in with Google"
							onSuccess={handleGoogleSignInSuccess}
							onFailure={handleGoogleSignInFailure}
							cookiePolicy={'single_host_origin'}
						/>
					</Form.Item>
					<Form.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<div>
							{!login ? (
								<FacebookLogin
									appId="708761370314324"	
									// appId="1110520183471339"
									autoLoad={false}
									fields="name,email,picture"
									callback={responseFacebook}
									textButton="Login with Facebook"
									version="12.0" 
									buttonStyle={{ width: '200px', height: '40px', background: 'rgb(77 122 215)', color: '#fff', border: 'none', fontSize: '12px', padding: '0' }}
								/>
							) : (
								<div>
									<h2>Welcome, {userData.name}!</h2>
									<p>Email: {userData.email}</p>
									<img src={userData.picture} alt="Profile" />
								</div>
							)}
						</div>
						{/* <ProfilePage userId={userId} userData={userData} /> */}
						

					</Form.Item>

					{/* <ProfilePage userData={userData} /> */}
				</Form>
			</div>
		</>
	);
};

export default LoginForm;






//login with facebook, google and instrgram and tweter//
// import React from 'react'
// import classes from './Login.module.css'

// import Box from '../../UI/Box'

// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
// import InstagramLogin from 'react-instagram-login';
// import TwitterLogin from "react-twitter-login";

// //redux
// import { useDispatch } from 'react-redux'
// import { login } from '../../store/features/auth'

// const Login = () => {

// 	const dispatch = useDispatch()

// 	const thirdPartyLoginHandler = ({ response, provider, error }) => {
// 		// console.log(" response>>", response)
// 		// console.log(" provider>>", provider)
// 		// console.log(" error>>", error)
// 		dispatch(login({ user: response, provider, error }))

// 	}

// 	const responseTwitter = (err, data) => {
// 		// console.log(err, data);
// 		if (err) return thirdPartyLoginHandler({ error: true, provider: 'twitter', response: {} })

// 		thirdPartyLoginHandler({ error: false, provider: 'twitter', response: data })
// 	};

// 	const responseFacebook = (response) => {
// 		// console.log('response >>>', response);
// 		if (response.status === 'unknown' || response.status === undefined || response.error)
// 			return thirdPartyLoginHandler({ error: true, provider: 'facebook', response: {} })

// 		thirdPartyLoginHandler({ error: false, provider: 'facebook', response })
// 	}

// 	const successResponseInstagram = (response) => thirdPartyLoginHandler({ error: false, provider: 'instagram', response })
// 	const failResponseInstagram = (err) => thirdPartyLoginHandler({ error: true, provider: 'instagram', responce: {} })

// 	const successResponseGoogle = (response) => { thirdPartyLoginHandler({ error: false, provider: 'google', response: response.profileObj }) }
// 	const failResponseGoogle = (response) => thirdPartyLoginHandler({ error: true, provider: 'google', response: {} })

// 	return (
// 		<Box className={classes.login}>
// 			<h1>Login</h1>
// 			<FacebookLogin
// 				appId="1082534248908784"
// 				// autoLoad={true}
// 				fields="name,email,picture"
// 				cssClass={classes.login__btn}
// 				callback={responseFacebook}
// 				textButton="Login with Facebook"
// 			/>
// 			<GoogleLogin
// 				clientId="905703355143-hbpbqk2bmpnjocs9j3h4r4537qmru1ma.apps.googleusercontent.com"
// 				className={classes.login__btn}
// 				onSuccess={successResponseGoogle}
// 				onFailure={failResponseGoogle}
// 				cookiePolicy={'single_host_origin'}
// 				render={(renderProps) => (<button className={classes.login__btn} onClick={renderProps.onClick}>Login with Google</button>)}
// 			/>
// 			<InstagramLogin
// 				clientId="ad6d0ba2753ddfe70dd3a33522df5e7a"
// 				onSuccess={successResponseInstagram}
// 				onFailure={failResponseInstagram}
// 				cssClass={classes.login__btn}
// 			>Login with Instagram</InstagramLogin>
// 			<TwitterLogin
// 				authCallback={responseTwitter}
// 				className={classes.login__btn}
// 				// consumerKey={CONSUMER_KEY}
// 				consumerSecret={'L8qq9PZyRg6ieKGEKhZolGC0vJWLw8iEJ88DRdyOg'}
// 			// children={<button>Login with Twitter</button>}
// 			>Login with Twitter</TwitterLogin>
// 		</Box>
// 	)
// }

// export default Login
