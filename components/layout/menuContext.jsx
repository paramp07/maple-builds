import React, { createContext, useState } from 'react';

// Create a context
const MenuContext = createContext();

// Create a provider component
const MenuProvider = ({ children }) => {
  // State to manage the menu open/close status
  const [open, setOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };