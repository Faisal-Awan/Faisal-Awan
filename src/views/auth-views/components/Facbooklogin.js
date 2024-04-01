// import React, { useEffect, useState } from 'react';
// import jwt from 'jsonwebtoken'; // Import jsonwebtoken library to encode JWT tokens

// const FacebookLoginButton = () => {
//     const [authResponse, setAuthResponse] = useState(null);

//     useEffect(() => {
//         // Initialize the Facebook SDK
//         window.fbAsyncInit = function () {
//             window.FB.init({
//                 appId: 'your-app-id',
//                 cookie: true,
//                 xfbml: true,
//                 version: 'v12.0'
//             });
//         };

//         // Load the Facebook SDK asynchronously
//         (function (d, s, id) {
//             var js, fjs = d.getElementsByTagName(s)[0];
//             if (d.getElementById(id)) { return; }
//             js = d.createElement(s); js.id = id;
//             js.src = "https://connect.facebook.net/en_US/sdk.js";
//             fjs.parentNode.insertBefore(js, fjs);
//         }(document, 'script', 'facebook-jssdk'));
//     }, []);

//     const loginWithFacebook = () => {
//         // Call FB.login() after FB.init()
//         window.FB.login(function (response) {
//             // Handle the response
//             console.log(response);
//             setAuthResponse(response.authResponse); // Store the authResponse in state
//         }, { scope: 'email' });
//     };

//     const generateJWT = () => {
//         if (authResponse) {
//             // Generate JWT token from authResponse
//             const jwtToken = jwt.sign(authResponse, 'your-secret-key');
//             console.log('JWT Token:', jwtToken);
//             // Now you can store or use this JWT token as needed
//         } else {
//             console.error('Auth response is null');
//         }
//     };

//     return (
//         <>
//             <button onClick={loginWithFacebook}>Login with Facebook</button>
//             <button onClick={generateJWT}>Generate JWT</button>
//         </>
//     );
// };

// export default FacebookLoginButton;


















// // import React, { useState } from 'react';
// // import FacebookLogin from 'react-facebook-login';
// // import { Card, Image } from 'react-bootstrap';

// // const Facbooklogin = () => {
// //     const [login, setLogin] = useState(false);
// //     const [data, setData] = useState({});
// //     const [picture, setPicture] = useState('');

// //     const responseFacebook = (response) => {
// //         if (response) {
// //             console.log(response);
// //             setData(response);
// //             if (response.picture && response.picture.data && response.picture.data.url) {
// //                 setPicture(response.picture.data.url);
// //             }
// //             if (response.accessToken) {
// //                 const accessToken = response.accessToken;
// //                 // Do something with the access token, such as storing it in state or sending it to your server.
// //                 console.log("Access token:", accessToken);
// //                 setLogin(true);
// //             } else {
// //                 setLogin(false);
// //             }
// //         } else {
// //             console.error("Empty response received from Facebook.");
// //             // Handle the error, such as displaying a message to the user or retrying the login process.
// //         }
// //     }
// //     return (
// //         <div>
// //             {!login &&
// //                 <FacebookLogin
// //                 appId="1110520183471339"
// //                     fields="name,email,picture"
// //                     callback={responseFacebook}
// //                     textButton="Login with Facebook"
// //                 />
// //             }
// //             {login &&
// //                 <Card>
// //                     <Card.Body>
// //                         <Image src={picture} roundedCircle />
// //                         <Card.Title>{data.name}</Card.Title>
// //                         <Card.Text>{data.email}</Card.Text>
// //                     </Card.Body>
// //                 </Card>
// //             }
// //         </div>
// //   );
// // }



// // export default Facbooklogin
