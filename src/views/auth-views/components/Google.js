import React from 'react';

import { GoogleLogin } from '@react-oauth/google';

const google = () => {

    return (
        <GoogleLogin
            clientId="26121329412-p55g1a7o7su76bdhu29a8uq7a0fgminh.apps.googleusercontent.com"
            onSuccess={credentialResponse => {
                console.log('Login Successful:', credentialResponse);
            }}
            onError={error => {
                console.error('Login Failed:', error);
            }}
        />
    )
}

export default google;