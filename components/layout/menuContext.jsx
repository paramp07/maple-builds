import React, { createContext, useState } from 'react';

// Create a context
const MenuContext = createContext();

// Create a provider component
const MenuProvider = ({ children }) => {
  // State to manage the menu open/close status
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  return (
    <MenuContext.Provider value={{ open, setOpen, dark, setDark }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };