import React, { useEffect } from "react";
import SessionManager from "./SessionManager";

const Logout = () => {
    useEffect(() => {
        console.log("component did mount for logout");
        SessionManager.removeUserSession();
        sessionStorage.removeItem('userData');
        window.location.href = "/login";
    }, []);

    return (
        <></>
    );
}

export default Logout;

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LogoutButton = () => {
//     const { logout } = useAuth0();

//     return (
//         <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//             Log Out
//         </button>
//     );
// };

// export default LogoutButton;
