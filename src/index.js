import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reactWebWitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./Contex/AuthContext";
ReactDOM.render(
  
    <BrowserRouter>
      <ChakraProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
    
  ,document.getElementById("root")
);
reportWebVitals();
