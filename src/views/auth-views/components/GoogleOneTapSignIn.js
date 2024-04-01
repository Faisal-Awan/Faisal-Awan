import React, { useEffect } from 'react';

const GoogleOneTapSignIn = () => {
    useEffect(() => {
        // Load Google One Tap script
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        document.body.appendChild(script);

        // Initialize Google One Tap
        script.onload = () => {
            window.google.accounts.id.initialize({
                client_id: '26121329412-p55g1a7o7su76bdhu29a8uq7a0fgminh.apps.googleusercontent.com', // Replace with your Google OAuth client ID
                callback: handleCredentialResponse,
                cancel_on_tap_outside: false
            });

            // Render the One Tap button
            window.google.accounts.id.renderButton(
                document.getElementById('google-signin-button'),
                { theme: 'outline', size: 'large', text: 'signin_with', shape: 'rectangular' }
            );
        };

        // Handle the credential response
        const handleCredentialResponse = (response) => {
            console.log('Credential Response:', response);
            // Handle the credential response here
        };

        // Clean up
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="google-signin-button"></div>
    );
};

export default GoogleOneTapSignIn;
