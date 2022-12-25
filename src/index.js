import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

// contexts
import SettingsProvider from "./contexts/SettingsContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider  store={store}>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
