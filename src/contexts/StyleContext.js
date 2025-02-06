import React, { createContext, useState } from "react";

const StyleContext = createContext(); // Create context

const StyleProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <StyleContext.Provider value={{ isDark, changeTheme }}>
      {children} {/* Wraps everything inside the provider */}
    </StyleContext.Provider>
  );
};

export { StyleContext, StyleProvider };
export default StyleContext;

