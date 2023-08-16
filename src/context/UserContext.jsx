import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const ToggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <UserContext.Provider
      value={{ isDarkTheme, ToggleDarkTheme, isSidebarOpen, setIsSidebarOpen }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
