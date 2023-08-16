import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./context/UserContext.jsx";
import FilterProvider from "./context/FilterContext.jsx";
import ContextProvider from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <UserProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </UserProvider>
    </ContextProvider>
  </React.StrictMode>
);
