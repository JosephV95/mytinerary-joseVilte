// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store/store.js";

import { GoogleOAuthProvider } from '@react-oauth/google';  //? importacion para loguearse con google

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <GoogleOAuthProvider clientId="513689467148-6adp1k9nhudg36fbro8n59nnf9gv8cfu.apps.googleusercontent.com"> 
        <App />
    </GoogleOAuthProvider>
    {/* </React.StrictMode> */}
  </Provider>
);
