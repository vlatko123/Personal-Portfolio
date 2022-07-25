import React, { useState } from "react";

export const ThemeContext = React.createContext("blue");

export const ThemeConstructor = ({ children }) => {
  const [localTheme, setTheme] = useState("blue");

  const changeTheme = () => {
    setTheme(localTheme === "blue" ? "green" : "blue");
  };

  return (
    <ThemeContext.Provider
      value={{ localTheme: localTheme, changeTheme: changeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
