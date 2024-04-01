import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux'; 
import store from './views/auth-views/components/store/Store';
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <GoogleOAuthProvider clientId="26121329412-p55g1a7o7su76bdhu29a8uq7a0fgminh.apps.googleusercontent.com">
    <Layout />
    </GoogleOAuthProvider>
    {/* </Provider>, */}

  </BrowserRouter>

);

reportWebVitals();





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
